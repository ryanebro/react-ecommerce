import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import { persistStore } from "redux-persist";

import rootReducer from "./root-reducer";

const middlewares = [logger];

// spread individual item in middlewares array into applyMiddleware function
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// persisted version of store
export const persistor = persistStore(store);

export default {store, persistor};
