import { GET_PRODUCTS, FILTER_PRODUCTS } from "../actions/actionTypes";

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
      const { searchType, searchWords } = action.payload;
      let filteredProducts = state.products;
      if (searchType !== DEFAULT_TYPE) {
        filteredProducts = state.products.filter(
          (product) => product.type === searchType
        );
      }
      if (searchWords !== DEFAULT_KEYWRODS) {
        filteredProducts = filteredProducts.filter(
          (product) => product.productName.toLowerCase().includes(searchWords.toLowerCase())
        );
      }
      return { ...state, searchType, searchWords, filteredProducts };
    default:
      return state;
  } 
};

export default productsReducer;
