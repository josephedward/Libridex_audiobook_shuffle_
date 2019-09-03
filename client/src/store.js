import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import combineReducers from "./reducers";
import rootReducer from "./reducers";


import { composeWithDevTools } from 'redux-devtools-extension';


const initialState = {};

const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  // () => [],
  // combineReducers,
rootReducer,
  initialState,
  // composeEnhancers(
    composeWithDevTools(

  applyMiddleware(...middleware),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;