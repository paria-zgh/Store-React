import { legacy_createStore,combineReducers , applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {product} from "./Reducer/ProductReducer";
import { CartReducer } from "./Reducer/CartReducers";
import { Allorders } from "./Reducer/ordersReducer";
import { OneProduct } from "./Reducer/ProductReducer";
import { Oneorder } from "./Reducer/ordersReducer";
import { User } from "./Reducer/LoginReducer";
import { LogOut,expire } from "./Reducer/LoginReducer";
const middleware=[thunk];
const reducer=combineReducers({product,cart:CartReducer,Allorders,OneProduct,Oneorder,User,LogOut,expire});
const store=legacy_createStore(reducer,applyMiddleware(...middleware));
export default store
