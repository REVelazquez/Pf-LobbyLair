require("dotenv").config();
const { Payment, Subscriptions } = require("../db");
const axios = require("axios");
const { PAYPAL_API_SECRET, PAYPAL_API_CLIENT, PAYPAL_API } = process.env;
const API = "https://api-m.sandbox.paypal.com";

const createOrder = async (req, res) => {
  const order = {
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code: "USD",
          value: "5",
        },
      },
    ],
    application_context: {
      brand_name: "lobbylair",
      landing_page: "NO_PREFERENCE",
      shipping_preference: "NO_SHIPPING",
      user_action: "PAY_NOW",
      return_url: "http://localhost:3001/capture-order",
      cancel_url: "http://localhost:3001/cancel-order",
    },
  };

  const params = new URLSearchParams();
  params.append("grant_type", "client_credentials");

  const authString = `${PAYPAL_API_CLIENT}:${PAYPAL_API_SECRET}`;
  const encodedAuth = Buffer.from(authString).toString("base64");
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: `Basic ${encodedAuth}`,
  };

  try {
    const {
      data: { access_token },
    } = await axios.post(`${API}/v1/oauth2/token`, params, { headers });
    console.log("a");
    const response = await axios.post(`${API}/v2/checkout/orders`, order, {
      headers: { Authorization: `Bearer ${access_token}` },
    });

    console.log(response.data);
    return res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to create PayPal order" });
  }
};
const jwt = require("jsonwebtoken");

const captureOrder = async (req, res) => {
  const { token, amount, currency, subscriptionType } = req.query;

  try {
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    const userId = decodedToken.userId;

    const response = await axios.post(
      `${API}/v2/checkout/orders/${token}/capture`,
      {},
      {
        auth: {
          username: PAYPAL_API_CLIENT,
          password: PAYPAL_API_SECRET,
        },
      }
    );

<<<<<<< HEAD
    console.log(response.data);
    return res.send("payment successful");
    // // Hashear el token después de utilizarlo
    // const hashedToken = await bcrypt.hash(token, 10);
    // // Aquí puedes almacenar o utilizar el valor hasheado del token en lugar del valor original
    //  // Crear una nueva entrada en la tabla Payment
    //  const payment = await Payment.create({
    //   amount: "5", // O cualquier otro monto que corresponda
    //   status: 'pending', // O cualquier otro estado inicial que corresponda
    //   method: 'PayPal', // O el método de pago que estés utilizando
    //   userId: req.user.id, // Suponiendo que tienes un middleware para autenticar al usuario y almacenar su información en req.user
    // });

    // // Asociar el pago al usuario
    // const user = await User.findByPk(req.user.id);
    // await user.addPayment(payment);

    // console.log(response.data);
    // return res.json(response.data);
=======
    const payment = await Payment.create({
      amount: parseInt(amount),
      currency,
      UserId: userId,
    });

    const subscription = await Subscriptions.create({
      type: subscriptionType,
    });
    await subscription.addUser(userId);

    return res.send("Payment successful");
>>>>>>> 351ef7432a4cae60112e169f9d629d6284d0073c
  } catch (error) {
    console.error(error.response.data);
    return res.status(500).json("Failed to capture order");
  }
};

const cancelPayment = (req, res) => {
  res.send("payment canceled");
};
module.exports = {
  createOrder,
  captureOrder,
  cancelPayment,
};
