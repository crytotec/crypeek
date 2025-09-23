import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface coin{
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  high_24h: number;
  low_24h: number;
  total_volume: number;
  price_change_percentage_24h: number;
  image: string;
}

interface coinState{
    coins:coin[]
}

const initialState:coinState={
    coins:[]
}

const coinSlice=createSlice({
    name:'coins',
    initialState,
    reducers:{
        setCoins(state, action: PayloadAction<coin[]>) {
      state.coins = action.payload;
    }
    }
})

export const {setCoins}=coinSlice.actions;
export default coinSlice.reducer

