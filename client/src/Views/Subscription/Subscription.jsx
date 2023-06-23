import React, { useState } from "react";
import Payment from "../../Components/Payment/Payment";

export default function Subscription() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showPayment, setShowPayment] = useState(false);

  const handleButtonClick = (option) => {
    setSelectedOption(option);
    setShowPayment(true);
  };

  if (showPayment) {
    return (
      <div className="flex">
        <div className="w-1/2">
          {selectedOption && (
            <div className="w-1/3 bg-white rounded-lg shadow-lg p-6 mx-2">
              <h2 className="text-4xl font-bold mb-4 text-black">
                {selectedOption.title}
              </h2>
              <span className="text-5xl font-bold text-black">
                {selectedOption.price}
              </span>
              <ul className="mt-6 text-black">
                {selectedOption.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="w-1/2">
          <Payment />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center p-1">
      <div className="mt-2">
        <h1 className="mb-4 text-6xl font-bold truncate border-black w-2/2 text-black">
          Title
        </h1>
        <p className="text-black mt-6">
          Choose the right pricing for you and get started working
        </p>
      </div>
      <div className="flex justify-center mt-8">
        <div className="w-1/3 bg-white rounded-lg shadow-lg p-6 mx-2">
          <h2 className="text-4xl font-bold mb-4 text-black">Standard</h2>
          <span className="text-5xl font-bold text-black">$20</span>
          <ul className="mt-6 text-black">
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            <li>Feature 4</li>
          </ul>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6"
            onClick={() =>
              handleButtonClick({
                title: "Standard",
                price: "$20",
                features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
              })
            }
          >
            Start your trial
          </button>
        </div>

        <div className="w-1/3 bg-white rounded-lg shadow-lg p-6 mx-2">
          <h2 className="text-4xl font-bold mb-4 text-black">Premium</h2>
          <span className="text-5xl font-bold text-black">$80</span>
          <ul className="mt-6 text-black">
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            <li>Feature 4</li>
          </ul>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6"
            onClick={() =>
              handleButtonClick({
                title: "Premium",
                price: "$80",
                features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
              })
            }
          >
            Start your trial
          </button>
        </div>

        <div className="w-1/3 bg-white rounded-lg shadow-lg p-6 mx-2">
          <h2 className="text-4xl font-bold mb-4 text-black">Premium2</h2>
          <span className="text-5xl font-bold text-black">$140</span>
          <ul className="mt-6 text-black">
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            <li>Feature 4</li>
          </ul>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6"
            onClick={() =>
              handleButtonClick({
                title: "Premium2",
                price: "$140",
                features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
              })
            }
          >
            Start your trial
          </button>
        </div>
      </div>
    </div>
  );
}
