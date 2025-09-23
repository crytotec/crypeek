import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Form {
  name: string;
}

interface FormState {
  nameforms: string;
}

const initialState: FormState = {
  nameforms: '',
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setForm: (state, action: PayloadAction<Form>) => {
      state.nameforms = action.payload.name; 
    },
  },
});

export const { setForm } = formSlice.actions;
export default formSlice.reducer;
