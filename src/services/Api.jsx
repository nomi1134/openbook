import axios from "axios";

const API = axios.create({
  baseURL: "https://world.openfoodfacts.net/api/v3.6/product/7622202334009.json",
});

export const getProductByBarcode = async (barcode) => {
  try {
    const response = await API.get(`/product/${barcode}.json`);

    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};