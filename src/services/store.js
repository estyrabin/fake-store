import { getFromStorage, setToStorage } from "../utils/utils";

export const getProducts = async () => {
  try {
    const cached = getFromStorage("products");

    if (cached) {
      return cached;
    }

    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    setToStorage("products", data);

    return data;
  } catch (error) {
    console.error(`Error: ${error}`);
    return [];
  }
};
