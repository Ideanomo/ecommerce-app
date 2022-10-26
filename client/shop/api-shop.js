const getCategory = async (signal) => {
  try {
    let response = await fetch(`https://fakestoreapi.com/products/categories`, {
      method: "GET",
      signal: signal,
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const getAllProducts = async (signal) => {
  try {
    let response = await fetch(`https://fakestoreapi.com/products/`, {
      method: "GET",
      signal: signal,
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export { getCategory, getAllProducts };
