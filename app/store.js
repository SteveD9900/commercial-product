import { configureStore } from '@reduxjs/toolkit'

import productsReducer from '../store/reducers/productsReducer'

export function makeStore() {
  return configureStore({
    reducer: { products: productsReducer },
  })
}

const store = makeStore()

export default store