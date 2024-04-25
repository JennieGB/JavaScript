import { configureStore, createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

// Начальное состояние
const initialState = {
  products: [],
};

// Создание слайса для продуктов
const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // Добавление нового продукта
    addProduct: (state, action) => {
      state.products.push({
        id: uuidv4(),
        ...action.payload,
      });
    },
    // Удаление продукта по ID
    removeProduct: (state, action) => {
      state.products = state.products.filter(product => product.id !== action.payload);
    },
    // Обновление продукта
    updateProduct: (state, action) => {
      const { id, ...updatedProduct } = action.payload;
      const index = state.products.findIndex(product => product.id === id);
      if (index !== -1) {
        state.products[index] = { ...state.products[index], ...updatedProduct };
      }
    },
    // Изменение доступности продукта
    toggleAvailability: (state, action) => {
      const { id, available } = action.payload;
      const index = state.products.findIndex(product => product.id === id);
      if (index !== -1) {
        state.products[index].available = available;
      }
    },
  },
});

// Экспорт экшенов и редьюсеров
export const { addProduct, removeProduct, updateProduct, toggleAvailability } = productsSlice.actions;
export default configureStore({
  reducer: {
    products: productsSlice.reducer,
  },
});
