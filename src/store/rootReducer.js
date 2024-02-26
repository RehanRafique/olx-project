import { combineReducers } from "redux";
import cartSlice from "./cart";

const rootReducer = combineReducers({
    cartReducer: cartSlice.reducer,
    // userReducer: userSlice.reducer
})

export default rootReducer
