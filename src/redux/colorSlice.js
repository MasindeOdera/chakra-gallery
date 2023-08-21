import { createSlice } from '@reduxjs/toolkit';

const colorSlice = createSlice({
  name: 'color',
  initialState: {},
  reducers: {
    setSelectedColor: (state, action) => {
      const { productId, color } = action.payload;
      state[productId] = color;
    },
  },
});

export const { setSelectedColor } = colorSlice.actions;
export default colorSlice.reducer;
