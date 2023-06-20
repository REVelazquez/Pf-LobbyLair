import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const PaymentComponent = () => {
  const stateUser = useSelector((state) => state.user);
  console.log(stateUser);
  const [selectedOption, setSelectedOption] = useState(null);

  const handlePaymentOption = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold  mb-8">Choose an option of payment:</h1>

      <div className="flex gap-4">
        <div
          className={`p-4 border rounded-md shadow-md flex items-center ${
            selectedOption === 'paypal' ? 'bg-blue-400' : 'bg-gray-100'
          }`}
          onClick={() => handlePaymentOption('paypal')}
          style={{ cursor: "pointer" }}
        >
          <img
            src="https://onx.la/c4cfc"
            alt="PayPal"
            style={{ cursor: "pointer" }}
            className="w-12 h-12 mr-4 cursor-pointer"
          />
          <span className="font-bold text-black">PayPal</span>
        </div>

        <div
          className={`p-4 border rounded-md shadow-md flex items-center ${
            selectedOption === 'mercadopago' ? 'bg-green-200' : 'bg-white'
          }`}
          style={{ cursor: "pointer" }}
          onClick={() => handlePaymentOption('mercadopago')}
        >
          <img
            src="https://onx.la/b301d"
            alt="MercadoPago"
            style={{ cursor: "pointer" }}
            className="w-12 h-12 mr-4 cursor-pointer"

          />
          <span className="font-bold text-black">MercadoPago</span>
        </div>
      </div>

      {selectedOption && (
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-2">Has selected:</h2>
          <p>{selectedOption === 'paypal' ? 'PayPal' : 'MercadoPago'}</p>
        </div>
      )}
    </div>
  );
};

export default PaymentComponent;
