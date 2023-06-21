require('dotenv').config();
const axios = require('axios');
const {PAYPAL_API_SECRET,PAYPAL_API_CLIENT,PAYPAL_API} = process.env;
const API = PAYPAL_API || 'https://api-m.sandbox.paypal.com';


const createOrder = async (req, res) => {
    const order = {
        intent: 'CAPTURE',
        purchase_units: [{
            amount: {
                currency_code: 'USD',
                value: '5'
            }
        }],
        application_context: {
            brand_name: 'lobbylair',
            landing_page: 'NO_PREFERENCE',
            shipping_preference: 'NO_SHIPPING',
            user_action: 'PAY_NOW',
            return_url: 'https://localhost:3001/capture-order',
            cancel_url: 'https://localhost:3001/cancel-order',
        },
      }
        const params = new URLSearchParams(); 
        params.append('grant_type', 'client_credentials');
        const {data:{access_token}} = await axios.post(API + '/v1/oauth2/token', params , {
          auth:{
            username: PAYPAL_API_CLIENT,
            password: PAYPAL_API_SECRET,
          }
        })
      const response = await axios.post(API + '/v2/checkout/orders', order, {
        Authorization: `Bearer ${access_token}`,
      })
      console.log(response);
      return res.json('captured order');
};

const captureOrder = async (req, res) => {
  const {token} = req.body;
  const response = await axios.post(API + '/v2/checkout/orders/'+ token +'/capture',{}, {
    auth:{
      username: PAYPAL_API_CLIENT,
      password: PAYPAL_API_SECRET,
    }
  });
  console.log(response.data);
  return res.send('payed');
  }


const cancelPayment = (req, res) => {
  res.redirect('/');
};
module.exports = {
  createOrder,
  captureOrder,
  cancelPayment
}