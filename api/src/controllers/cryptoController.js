const { ethers } = require('ethers');
require("dotenv").config();
const { ALCHEMY_API_KEY, METAMASK_PRIVATE_KEY } = process.env;

// Crea una instancia de proveedor utilizando Alchemy
const provider = new ethers.providers.JsonRpcProvider(`https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_API_KEY}`);

// Función para enviar ethers utilizando MetaMask y Alchemy
async function makeCryptoPayment(direccionDestinatario, cantidad) {
  try {
    console.log(cantidad);
     // Verificar si la cantidad es un número válido
     if (isNaN(cantidad) || cantidad <= 0) {
      throw new Error('La cantidad proporcionada no es un número válido');
    }
    // Obtiene la clave privada de tu cuenta (asegúrate de mantenerla segura)
    const privateKey = METAMASK_PRIVATE_KEY;

    // Conecta con la cuenta utilizando la clave privada
    const wallet = new ethers.Wallet(privateKey, provider);

    // Convierte la cantidad a un número decimal
    const cantidadDecimal = parseFloat(cantidad);

    // Verifica si la conversión fue exitosa
    if (isNaN(cantidadDecimal)) {
      throw new Error('La cantidad proporcionada no es un número válido');
    }

    // Construye la transacción
    const transaction = {
      to: direccionDestinatario,
      value: ethers.utils.parseEther(cantidadDecimal.toString())
    };

    // Firma y envía la transacción
    const signedTransaction = await wallet.sendTransaction(transaction);
    const receipt = await signedTransaction.wait();

    return receipt;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = {
  makeCryptoPayment
};

