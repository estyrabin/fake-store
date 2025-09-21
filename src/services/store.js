export const getProducts = async () => {
  try {
    const cached = localStorage.getItem("products");

    if (cached) {
      return JSON.parse(cached);
    }

    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    localStorage.setItem("products", JSON.stringify(data));

    return data;
    
  } catch (error) {
    console.error(`Error: ${error}`);
    return [];
  }
};
