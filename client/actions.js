const TYPES = {
  GET_PRODUCTS: 'GET_PRODUCTS',
  SET_PRODUCT: 'SET_PRODUCT',
};

const getProducts = (products) => ({
  type: TYPES.GET_PRODUCTS,
  products,
});

const setProduct = (name) => ({
  type: TYPES.SET_PRODUCT,
  name,
});

export { TYPES, getProducts, setProduct };
