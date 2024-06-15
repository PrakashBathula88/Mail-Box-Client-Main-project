import { configureStore, createSlice } from "@reduxjs/toolkit";
const emailslice = createSlice({
  name: "email",
  initialState: {
    from: "",
    to: "",
    subject: "",
    composing: "",
    productDate:"",
  },
  reducers: {
    setFrom(state, action) {
      state.from = action.payload;
    },
    setTo(state, action) {
      state.to = action.payload;
    },
    setSubject(state, action) {
      state.subject = action.payload;
    },
    setCompose(state, action) {
      state.composing = action.payload;
    },
   setProductDate(state,action){
    state.productDate=action.payload;
   }
  },
});

export const { setFrom, setTo, setSubject, setCompose,setProductDate } = emailslice.actions;
export const store = configureStore({
  reducer: {
    email: emailslice.reducer,
  },
});
