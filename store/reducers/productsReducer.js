import { GET_PRODUCTS, FILTER_PRODUCTS, SEARCH_PRODUCTS } from "../actions/actionTypes";

const DEFAULT_TYPE = "All";

const initialState = {
  searchType: DEFAULT_TYPE,
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
      return { searchType: DEFAULT_TYPE, products: action.payload, filteredProducts: action.payload };

    case FILTER_PRODUCTS:
      if (action.payload === DEFAULT_TYPE)
        return { ...state, searchType: DEFAULT_TYPE, filteredProducts: state.products };
      const filteredProducts = state.products.filter(
        (product) => product.type === action.payload
      );
      return { ...state, searchType: action.payload, filteredProducts: filteredProducts };

    case SEARCH_PRODUCTS:
      if (action.payload === "") {
        const searchedProducts = state.products.filter(function(product) {
          if (state.searchType === DEFAULT_TYPE) {
            return true;
          }
          return product.type === state.searchType;
        });
        return { ...state, filteredProducts: searchedProducts };
      } else {
        const searchedProducts = state.products.filter(function(product) {
          if (state.searchType === DEFAULT_TYPE) {
            return product.productName.toLowerCase().includes(action.payload.toLowerCase());
          }
          return product.type === state.searchType && product.productName.toLowerCase().includes(action.payload.toLowerCase());
        });
        return { ...state, filteredProducts: searchedProducts };
      }
    default:
      return state;
  }
};

export default productsReducer;
