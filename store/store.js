import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import { createWrapper } from "next-redux-wrapper"

// import { composeWithDevTools } from 'redux-devtools-extension';
// import logger from "redux-logger"
// import { configureStore } from "@reduxjs/toolkit"
import thunkMiddleware from "redux-thunk"
import rootReducer from "./reducers/root.reducer";
import rulesReducer from "./reducers/rules.reducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const reducers = combineReducers({
  root: rootReducer, rules: rulesReducer
})

let store = () => createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

let wrapperStore = createWrapper(store, {debug: true})

export default wrapperStore