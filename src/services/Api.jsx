import axios from "axios";

const API = axios.create({
  baseURL: "https://world.openfoodfacts.net/api/v3.6",
});

export const getProductByBarcode = async (barcode) => {
  const response = await API.get(`/product/${barcode}.json`);
  return response.data;
};