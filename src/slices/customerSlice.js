import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import customerService from '../services/customerService';

// Initial value to redux
const initialState = {
  customer: null,
  error: false,
  loading: false,
  success: false,
};

// Register an customer
export const register = createAsyncThunk(
  'customer/register',
  async (customer, thunkApi) => {
    try {
      const data = await customerService.register(customer);

      // check for errors
      if (data.status !== 201) {
        return thunkApi.rejectWithValue(data.message);
      }

      return data;
    } catch (error) {
      console.log('Erro durante o registro: ' + error);
    }
  },
);

// get all customer
export const getAllCustomer = createAsyncThunk('customer/getall', async () => {
  const data = await customerService.getAllCustomer();

  return data;
});

// get order distance
export const getOrderDistance = createAsyncThunk(
  '/customer/getOrderDistance',
  async () => {
    const data = await customerService.getOrderDistance();

    return data;
  },
);

export const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    reset(state) {
      state.loading = false;
      state.error = false;
      state.success = false;
      state.order = null;
      state.customers = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.customer = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.customer = action.payload;
        state.success = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.customer = null;
      })
      .addCase(getAllCustomer.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getAllCustomer.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.customers = action.payload;
        state.success = true;
      })
      .addCase(getOrderDistance.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getOrderDistance.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.order = action.payload;
        state.success = true;
      });
  },
});

export const { reset } = customerSlice.actions;
export default customerSlice.reducer;
