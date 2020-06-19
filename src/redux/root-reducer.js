// base code that combines all of the other states together, overall reducer
import { combineReducers } from "redux";
import {persistReducer} from "redux-persist";

// localstorage via redux persist
import storage from "redux-persist/lib/storage";

import userReducer from "../redux/user/user-reducer";
import cartReducer from "../redux/cart/cart-reducer";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'] // array containing the string names of any of the reducer that we want to store
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer
});

// export modified version of root reducer with persistance capabilities
export default persistReducer(persistConfig, rootReducer)