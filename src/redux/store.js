import { configureStore } from '@reduxjs/toolkit';
import colorReducer from './colorSlice';

//Add default selected colors for products
const initialSelectedColors = {
  1: 'GreyBlue',
  2: 'Navy',
  3: 'BlackIsh',
  4: 'WhiteIsh'
};

const store = configureStore({
  reducer: {
    color: colorReducer,
    // Add other reducers here if needed
  },
  preloadedState: {
    color: initialSelectedColors,
  },
});

export default store;
