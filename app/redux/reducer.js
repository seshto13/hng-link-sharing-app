import { createSlice } from "@reduxjs/toolkit";
import fetchData from "@/app/firebase/fetchData";
//import fetchData from "../firebase/fetchData";

const linkSlice = createSlice({
  name: "info",
  initialState: [],
  reducers: {
    addLink: (state, action) => {
      
    },
    GetLink:   (state, action) =>  {
    action.payload.map((result) => {
    const itemExists = state.find((item) => item.id === result.id);
      if (itemExists) {
      } else {
        state.push({...result } );
      }
     })

    },
    
  },
});

export const linkReducer = linkSlice.reducer;

export const {
  addLink,
  GetLink,
} = linkSlice.actions;
