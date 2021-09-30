import { GET_PRODUCTS, FILTER_PRODUCTS, SEARCH_PRODUCTS } from "../actions/actionTypes";

const DEFAULT_TYPE = "All";
const DEFAULT_KEYWRODS = "";

const initialState = {
  searchType: DEFAULT_TYPE,
  searchWords: DEFAULT_KEYWRODS,
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
      return { searchType: DEFAULT_TYPE, searchWords: DEFAULT_KEYWRODS, products: action.payload, filteredProducts: action.payload };

    case FILTER_PRODUCTS:
      if (action.payload === DEFAULT_TYPE) {
        if (state.searchWords == DEFAULT_KEYWRODS) {
          return { ...state, searchType: DEFAULT_TYPE, filteredProducts: state.products };
        }
        const filteredProducts = state.products.filter(
          (product) => product.productName.toLowerCase().includes(state.searchWords.toLowerCase())
        );
        return { ...state, searchType: DEFAULT_TYPE, filteredProducts: filteredProducts };
      } else {
        if (state.searchWords == DEFAULT_KEYWRODS) {
          const filteredProducts = state.products.filter(
            (product) => product.type === action.payload
          );
          return { ...state, searchType: action.payload, filteredProducts: filteredProducts };
        } else {
          const filteredProducts = state.products.filter(
            (product) => product.type === action.payload && product.productName.toLowerCase().includes(state.searchWords.toLowerCase())
          );
          return { ...state, searchType: action.payload, filteredProducts: filteredProducts };
        }
      }
    case SEARCH_PRODUCTS:
      if (action.payload === DEFAULT_KEYWRODS) {
        if (state.searchType === DEFAULT_TYPE) {
          return { ...state, searchWords: DEFAULT_KEYWRODS, filteredProducts: state.products };
        }
        const searchedProducts = state.products.filter(
          (product) => product.type === state.searchType
        );
        return { ...state, searchWords: DEFAULT_KEYWRODS, filteredProducts: searchedProducts };
      } else {
        if (state.searchType === DEFAULT_TYPE) {
          const searchedProducts = state.products.filter(function(product) {
            return product.productName.toLowerCase().includes(action.payload.toLowerCase());
          });
          return { ...state, searchWords: action.payload, filteredProducts: searchedProducts };
        } else {
          const searchedProducts = state.products.filter(function(product) {
            return product.type === state.searchType && product.productName.toLowerCase().includes(action.payload.toLowerCase());
          });
          return { ...state, searchWords: action.payload, filteredProducts: searchedProducts };
        }
      }
    default:
      return state;
  }
};

export default productsReducer;
