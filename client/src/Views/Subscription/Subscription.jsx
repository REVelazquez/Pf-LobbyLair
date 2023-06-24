import React, { useState } from "react";
import PaymentComponent from "../Payment/Payment";

const Subscription = () => {
  const subscriptionPlans = [
    {
      title: "Standard",
      price: "$20",
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"]
    },
    {
      title: "Premium",
      price: "$80",
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"]
    },
    {
      title: "Premium2",
      price: "$140",
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"]
    }
  ];

  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showPayment, setShowPayment] = useState(false);

  const handlePlanSelection = (index) => {
    setSelectedPlan(index);
    setShowPayment(true);
  };

  return (
    <div className="flex flex-col items-center p-1">
      <div className="mt-2">
        <h1 className="mb-4 text-6xl font-bold text-black">Title</h1>
        <p className="text-black mt-6">
          Choose the right pricing for you and get started working
        </p>
      </div>

      <div className="flex justify-center mt-8">
        {subscriptionPlans.map((plan, index) => (
          <div
            key={index}
            className={`w-1/3 bg-white rounded-lg shadow-lg p-6 mx-2 ${
              selectedPlan === index ? "bg-yellow-200" : ""
            } cursor-pointer`}
            onClick={() => handlePlanSelection(index)}
          >
            <h2 className="text-4xl font-bold mb-4 text-black">
              {plan.title}
            </h2>
            <span className="text-5xl font-bold text-black">{plan.price}</span>
            <ul className="mt-6 text-black">
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button
              className="bg-[#1f2937] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6"
              onClick={() => handlePlanSelection(index)}
            >
              Start your trial
            </button>
          </div>
        ))}
      </div>

      {showPayment && <PaymentComponent />}
    </div>
  );
};

export default Subscription;



