import React, { useState } from 'react';

const PaymentComponent = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handlePaymentOption = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-8">Choose an option of payment:</h1>

      <div className="flex gap-4">
        <div
          className={`p-4 border rounded-md shadow-md flex items-center ${
            selectedOption === 'paypal' ? 'bg-blue-200' : 'bg-white'
          }`}
          onClick={() => handlePaymentOption('paypal')}
          style={{ cursor: "pointer" }}
        >
          <img
            src="https://onx.la/c4cfc"
            alt="PayPal"
            className="w-12 h-12 mr-4"
            style={{ cursor: "pointer" }}
          />
          <span className="font-bold">PayPal</span>
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
            className="w-12 h-12 mr-4"
            style={{ cursor: "pointer" }}
          />
          <span className="font-bold">MercadoPago</span>
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
