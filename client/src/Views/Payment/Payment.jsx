import React, { useState } from "react";
import { useSelector } from "react-redux";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";
import { ethers } from "ethers";
const PaymentComponent = ({ amount, type, currency, address }) => {
  const [preferenceId, setPreferenceId] = useState(null);
  const stateUser = useSelector((state) => state.user);
  const [selectedOption, setSelectedOption] = useState(null);
  const REACT_APP_KEY = window.env.REACT_APP_MERCADOPAGO_KEY;
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [connButtonText, setConnButtonText] = useState("Connect Wallet");
  const connectWalletHandler = async () => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      console.log("MetaMask Here!");
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          accountChangedHandler(result[0]);
          setConnButtonText("Wallet Connected");
          getAccountBalance(result[0]);
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else {
      console.log("Need to install MetaMask");
      setErrorMessage("Please install MetaMask browser extension to interact");
    }
    try {
      const response = await axios.post(
        "http://localhost:3001/crypto/payment",
        {
          amount: amount,
          currency: currency,
          address: address,
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  // update account, will cause component re-render
  const accountChangedHandler = (newAccount) => {
    setDefaultAccount(newAccount);
    getAccountBalance(newAccount.toString());
  };

  const getAccountBalance = (account) => {
    window.ethereum
      .request({ method: "eth_getBalance", params: [account, "latest"] })
      .then((balance) => {
        setUserBalance(ethers.utils.formatEther(balance));
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const chainChangedHandler = () => {
    // reload the page to avoid any errors with chain change mid use of application
    window.location.reload();
  };

  // listen for account changes
  window.ethereum.on("accountsChanged", accountChangedHandler);

  window.ethereum.on("chainChanged", chainChangedHandler);

  const createPreference = async () => {
    initMercadoPago(REACT_APP_KEY);
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const token = user.token;
      const response = await axios.post("http://localhost:3001/payment", {
        token: token,
        amount: amount,
        type: type,
        currency: currency,
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
      const user = JSON.parse(localStorage.getItem("user"));
      const token = user.token;
      const response = await axios.post("http://localhost:3001/create-order", {
        token: token,
        amount: amount,
        type: type,
        currency: currency,
      });

      if (response) {
        const data = response.data;
        console.log(data);
        if (data.links && data.links[1] && data.links[1].href) {
          window.location.href = data.links[1].href;
        } else {
          console.error("Invalid response format: missing links[1].href");
        }
      } else {
        console.error("Request failed with status:", response.status);
      }
    } catch (error) {
      console.error("An error occurred:", error);
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
    <div className="flex flex-col items-center mt-7 h-screen ">
      <h1 className="text-2xl font-bold mb-8">Choose a payment option:</h1>

      <div className="flex gap-4">
        <div
          className={`p-4 border rounded-md shadow-md flex items-center ${
            selectedOption === "paypal" ? "bg-blue-400" : "bg-gray-100"
          }`}
          onClick={() => handlePayPal("paypal")}
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
            selectedOption === "mercadopago" ? "bg-green-200" : "bg-white"
          }`}
          style={{ cursor: "pointer" }}
          onClick={() => handleMercadoPago("mercadopago")}
        >
          {preferenceId && (
            <Wallet initialization={{ preferenceId: preferenceId }} />
          )}

          <img
            src="https://onx.la/b301d"
            alt="MercadoPago"
            style={{ cursor: "pointer" }}
            className="w-12 h-12 mr-4 cursor-pointer"
          />
          <span className="font-bold text-black">MercadoPago</span>
        </div>
        <div
          className={`p-4 border rounded-md shadow-md grid items-center ${
            selectedOption === "metamask" ? "bg-orange-200" : "bg-white"
          }`}
          onClick={connectWalletHandler}
        >
          <img
            src="https://logowik.com/content/uploads/images/metamask4112.jpg"
            alt="MetaMask"
            style={{ cursor: "pointer" }}
            className="w-28 h-22 mr-4 items-center cursor-pointer"
          />
          <div>
            <h3>Address: {defaultAccount}</h3>
          </div>
          <div>
            <h3>Balance: {userBalance}</h3>
          </div>
          {errorMessage}
        </div>
      </div>
    </div>
  );
};

export default PaymentComponent;