import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FcApproval } from 'react-icons/fc';
import { motion } from "framer-motion";

function Feedback() {
  const [typedText, setTypedText] = useState("");
  const sentence = "Your transaction has been processed successfully.";

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userId = searchParams.get("userId");
  const amount = searchParams.get("amount");
  const currency = searchParams.get("currency");
  const type = searchParams.get("type");

  useEffect(() => {
    let currentText = "";
    let index = 0;
    const typingInterval = setInterval(() => {
      currentText += sentence[index];
      setTypedText(currentText);
      index++;
      if (index >= sentence.length) {
        clearInterval(typingInterval);
      }
    }, 100);
    return () => {
      clearInterval(typingInterval);
    };
  }, []);

  return (
    <div>
      <main className="h-screen">
        <div className="absolute w-full h-full bg-[#36353590] flex items-center justify-center z-30">
          <div className="bg-[#19a237] w-[40%] mx-auto h-[40%] mb-10 rounded-[2rem] p-4">
            <div className="flex flex-col items-center justify-around bg-white h-full pt-4 pb-6 rounded-[1rem]">
              <div>
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="font-bold text-xl text-[#0e0e0e] mt-[1rem] text-center"
                >
                  <FcApproval className="text-[#0e0e0e] inline-block mr-2" />
                  {typedText}
                </motion.h2>
                <p>{userId}</p>
                <p>{amount}</p>
                <p>{currency}</p>
                <p>{type}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Feedback;
