const axios = require('axios');
const { ethers } = require('ethers');
require("dotenv").config();
const { ALCHEMY_API_KEY, METAMASK_PRIVATE_KEY } = process.env;
// Crea una instancia de proveedor utilizando Alchemy
const provider = new ethers.providers.JsonRpcProvider(`https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_API_KEY}`);

// Obtiene el precio actual de Ethereum en dólares utilizando la API de CoinGecko
async function getEthereumPriceInUSD() {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
    const { ethereum: { usd } } = response.data;
    console.log('ethereum in dollars: ',{usd});
    return usd;
  } catch (error) {
    console.error('Error al obtener el precio de Ethereum:', error);
    throw error;
  }
}
// Obtiene el precio actual de Ethereum en pesos utilizando la API de CoinGecko
async function getEthereumPriceInARS() {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=ars');
    const { ethereum: { ars } } = response.data;
    console.log('ethereum in pesos: ',{ars});
    return ars;
  } catch (error) {
    console.error('Error al obtener el precio de Ethereum:', error);
    res.send.status(500).Error(error);
  }
}
getEthereumPriceInUSD();
getEthereumPriceInARS();
// Función para enviar ethers utilizando MetaMask y Alchemy
const makeCryptoPayment = async(req,res) => {
  const { destinatario, cantidadDolares } = req.body;

  try {
    console.log(cantidadDolares);
     // Verificar si la cantidad es un número válido
     if (isNaN(cantidadDolares) || cantidadDolares <= 0) {
      throw new Error('La cantidad proporcionada no es un número válido');
    }
    // Obtiene la clave privada de tu cuenta (asegúrate de mantenerla segura)
    const privateKey = METAMASK_PRIVATE_KEY;
    // Obtener el precio actual de Ethereum en dólares
    const ethPriceUSD = await getEthereumPriceInUSD();
    // Calcular la cantidad equivalente en ETH
    const cantidadETH = cantidadDolares / ethPriceUSD;
    // Conecta con la cuenta utilizando la clave privada
    const wallet = new ethers.Wallet(privateKey, provider);

     // Construir la transacción
     const transaction = {
      to: destinatario,
      value: ethers.utils.parseEther(cantidadETH.toString())
    };

    // Firma y envía la transacción
    const signedTransaction = await wallet.sendTransaction(transaction);
    const receipt = await signedTransaction.wait();

    return receipt;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = {
  makeCryptoPayment
};

