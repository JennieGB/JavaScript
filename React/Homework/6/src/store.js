import { configureStore, createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    addProduct(state, action) {
      state.push(action.payload);
    },
    // Добавьте здесь другие редьюсеры для удаления, редактирования и изменения доступности продуктов
  },
});

export const { addProduct } = productsSlice.actions;

export default configureStore({
  reducer: {
    products: productsSlice.reducer,
  },
});
