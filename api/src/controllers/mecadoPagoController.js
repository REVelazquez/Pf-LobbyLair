const { User, Payment } = require("../db.js");
const mercadopago = require("mercadopago");
const express = require("express");
const server = require("../app.js");

require("dotenv").config();
const {MERCADOPAGO_ACCESS_TOKEN} = process.env;
server.use = express.json();
mercadopago.configure({
  access_token: MERCADOPAGO_ACCESS_TOKEN,
});

const createPreference = async (req, res) => {
  let preference = {
    items: [
      {
        title: req.body.description,
        unit_price: Number(req.body.price),
        quantity: Number(req.body.quantity),
      },
    ],
    back_urls: {
      success: "http://localhost:3001/feedback",
      failure: "http://localhost:3001/feedback",
      pending: "http://localhost:3001/feedback",
    },
    auto_return: "approved",
  };

  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      res.json({
        id: response.body.id,
      });
      // // Crear una nueva entrada en la tabla Payment
      // const payment = await Payment.create({
      //   amount: req.body.amount,
      //   status: 'pending', // O cualquier otro estado inicial que corresponda
      //   method: 'Mercado Pago', // O el método de pago que estés utilizando
      //   userId: req.user.id, // Suponiendo que tienes un middleware para autenticar al usuario y almacenar su información en req.user
      // });

      // // Asociar el pago al usuario
      // const user = await User.findByPk(req.user.id);
      // await user.addPayment(payment);

      // res.json({
      //   paymentId: payment.id,
      // });
    })
    .catch(function (error) {
      console.log(error);
    });
};
const feedback = async (req, res) => {
  res.json({
    Payment: req.query.payment_id,
    Status: req.query.status,
    MerchantOrder: req.query.merchant_order_id,
  });
};
module.exports = {
  createPreference,
  feedback,
};
