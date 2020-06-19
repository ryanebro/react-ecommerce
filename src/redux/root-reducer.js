// base code that combines all of the other states together, overall reducer
import { combineReducers } from "redux";

import userReducer from "../redux/user/user-reducer";
import cartReducer from "../redux/cart/cart-reducer";

// full state in redux is just one big object
export default combineReducers({
  user: userReducer,
  cart: cartReducer
});
