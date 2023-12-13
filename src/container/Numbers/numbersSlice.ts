import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface NumbersSlice {
  value: string,
  pinCode:string,
  accessGranted: boolean,
  accessDenied: boolean,
  clearInput: boolean,
}

const initialState: NumbersSlice = {
  value: '',
  pinCode: '1337',
  accessGranted: false,
  accessDenied: false,
  clearInput: false,
};

export const numberSlice = createSlice({
  name: 'number',
  initialState,
  reducers: {
    inputNumber: (state, action: PayloadAction<string> ) => {
      if (state.value.length < 4 ) {
        state.value += action.payload;
      }
    },

    deleteNumber: (state) => {
     state.value = state.value.slice(0, -1);
    },

    checkAccess: (state) => {
      if (state.value !== state.pinCode) {
        state.accessDenied = state.value !== state.pinCode;
      } else {
        state.accessGranted = state.value === state.pinCode;
      }
    },

    clearNumber: (state) => {
        state.value = '';
        state.accessGranted = false;
        state.accessDenied = false;
    },
  }
});

export const numberReducer = numberSlice.reducer;
export const {inputNumber,
              deleteNumber,
              checkAccess,
              clearNumber} = numberSlice.actions;