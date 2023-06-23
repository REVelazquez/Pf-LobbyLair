import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import axios from 'axios';
import env from 'react-dotenv';
import detectEthereumProvider from '@metamask/detect-provider';
import Web3 from 'web3';

const PaymentComponent = () => {
  const [preferenceId, setPreferenceId] = useState(null);
  const stateUser = useSelector((state) => state.user);
  console.log(stateUser);
  const [selectedOption, setSelectedOption] = useState(null);
  const REACT_APP_KEY = env.REACT_APP_MERCADOPAGO_KEY;
  console.log(REACT_APP_KEY)
  const [address, setAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [privateKey, setPrivateKey] = useState('');

  const connectToMetaMask = async () => {
    try {
      // Detecta el proveedor de MetaMask
      const provider = await detectEthereumProvider();

      if (provider) {
        // Conecta la instancia de Web3 a MetaMask
        const web3 = new Web3(provider);

        // Solicita al usuario que se conecte a su cuenta de MetaMask
        await provider.request({ method: 'eth_requestAccounts' });

        // Obtiene la dirección de la cuenta del usuario
        const accounts = await web3.eth.getAccounts();
        const userAddress = accounts[0];

        setAddress(userAddress);
      } else {
        console.error('MetaMask no está instalado');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleMetamaskPayment = async () => {
    try {
      // Realiza una solicitud POST al backend para iniciar la transacción de criptomonedas
      const response = await fetch('/crypto/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ address, amount, privateKey }),
      });

      const data = await response.json();

      if (data.success) {
        console.log('Transacción exitosa:', data.transactionHash);
      } else {
        console.error('Error al realizar la transacción de criptomonedas:', data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const createPreference = async () => {
    initMercadoPago(REACT_APP_KEY);
    try {
      const response = await axios.post('http://localhost:3001/payment', {
        description: 'MercadoPago',
        price: 100,
        quantity: 1,
        currency_id: 'ARS',
      });
      const { id } = response.data;
      return id;
    } catch (error) {
      console.error(error);
    }
  };

  const handlePayPal = async (option) => {
    setSelectedOption(option);

    try {
      const response = await fetch('http://localhost:3001/create-order', {
        method: 'POST',
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        if (data.links && data.links[1] && data.links[1].href) {
          window.location.href = data.links[1].href;
        } else {
          console.error('Invalid response format: missing links[1].href');
        }
      } else {
        console.error('Request failed with status:', response.status);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }

    setSelectedOption(null);
  };

  const handleMercadoPago = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-8">Choose a payment option:</h1>

      <div className="flex gap-4">
        <div
          className={`p-4 border rounded-md shadow-md flex items-center ${
            selectedOption === 'paypal' ? 'bg-blue-400' : 'bg-gray-100'
          }`}
          onClick={() => handlePayPal('paypal')}
          style={{ cursor: 'pointer' }}
        >
          <img
            src="https://onx.la/c4cfc"
            alt="PayPal"
            style={{ cursor: 'pointer' }}
            className="w-12 h-12 mr-4 cursor-pointer"
          />
          <span className="font-bold text-black">PayPal</span>
        </div>

        <div
          className={`p-4 border rounded-md shadow-md flex items-center ${
            selectedOption === 'mercadopago' ? 'bg-green-200' : 'bg-white'
          }`}
          style={{ cursor: 'pointer' }}
          onClick={() => handleMercadoPago('mercadopago')}
        >
          {preferenceId && (
            <Wallet initialization={{ preferenceId: preferenceId }} />
          )}

          <img
            src="https://onx.la/b301d"
            alt="MercadoPago"
            style={{ cursor: 'pointer' }}
            className="w-12 h-12 mr-4 cursor-pointer"
          />
          <span className="font-bold text-black">MercadoPago</span>
        </div>
        <div>
          <button onClick={connectToMetaMask}>Conectar con MetaMask</button>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Dirección" />
          <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Cantidad" />
          <input type="text" value={privateKey} onChange={(e) => setPrivateKey(e.target.value)} placeholder="Clave privada" />
          <button onClick={handleMetamaskPayment}>Pagar con criptomonedas</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentComponent;

