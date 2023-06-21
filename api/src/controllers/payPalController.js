
const CLIENT = 'AXwgnPPexacq7mPHbsiMHaYqOgY0NVRMELAMtNvLWNyE6iTkvo2P-mmNO8JzxIwnosf1XzKmP_R7_PZE';
const SECRET  = 'EK7K_v3X5Em3Vx-66xy2hu1TNpiSRV_emNTY3EdDxj0JQpibRbIO9Oox7_pUDNr9FQeRe4D0vytBovwC';
const PAYPAL_API = 'https://api-m.sandbox.paypal.com/v1/';
const auth = {user:CLIENT, pass:SECRET};
const request = require('request');
const createPayPalPayment = async (req,res) =>{
  const body = {
    intent: 'CAPTURE',
    purchase_units:[{
      amount: {
        currency_code:'USD',
        value:'5'
      }
    }],
    application_context:{
      brand_name:'lobbylair',
      landing_page:'NO_PREFERENCE',
      user_action:'PAY_NOW',
      return_url:'http://localhost:3001/execute_payment',
      cancel_url:'http://localhost:3001/cancel_payment',
    }
    }
    request.post(`${PAYPAL_API}/v2/checkouts/orders`),{
      auth,
      body,
      JSON: true
    },(err, response) => { 
      res.JSON({data: response.body} );
    }
}
const executePayment = (req, res) => {
    const token = req.query.token; //<-----------

    request.post(`${PAYPAL_API}/v2/checkout/orders/${token}/capture`, {
        auth,
        body: {},
        json: true
    }, (err, response) => {
        res.json({ data: response.body })
    })
}
const createProduct = (req, res) => {
    const product = {
        name: 'Subscripcion Youtube',
        description: "Subscripcion a un canal de Youtube se cobra mensualmente",
        type: 'SERVICE',
        category: 'SOFTWARE',
        image_url: 'https://avatars.githubusercontent.com/u/15802366?s=460&u=ac6cc646599f2ed6c4699a74b15192a29177f85a&v=4'

    }

    //https://developer.paypal.com/docs/api/catalog-products/v1/#products_create
    request.post(`${PAYPAL_API}/v1/catalogs/products`, {
        auth,
        body: product,
        json: true
    }, (err, response) => {
        res.json({ data: response.body })
    })
}
module.exports = {
    createPayPalPayment,
    executePayment,
    createProduct
}