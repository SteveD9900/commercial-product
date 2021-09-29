import { GET_PRODUCTS, FILTER_PRODUCTS, SEARCH_PRODUCTS } from "../actions/actionTypes";

const initialState = {
  products: [
    {
      index: 0,
      isSale: false,
      price: "$49.99",
      productImage: "Product_1.jpeg",
      productName: "Default Name",
      type: "Beer",
    },
  ],
  filteredProducts: [
    {
      index: 0,
      isSale: false,
      price: "$49.99",
      productImage: "Product_1.jpeg",
      productName: "Default Name",
      type: "Beer",
    },
  ],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { products: action.payload, filteredProducts: action.payload };

    case FILTER_PRODUCTS:
      if (action.payload === "All")
        return { ...state, filteredProducts: state.products };
      const filteredProducts = state.products.filter(
        (product) => product.type === action.payload
      );
      return { ...state, filteredProducts: filteredProducts };

    case SEARCH_PRODUCTS:
      if (action.payload === "")
        return { ...state, filteredProducts: state.products };
      const searchedProducts = state.filteredProducts.filter(
        (product) => product.productName.includes(action.payload)
      );
      return { ...state, filteredProducts: searchedProducts };

    default:
      return state;
  }
};

export default productsReducer;
