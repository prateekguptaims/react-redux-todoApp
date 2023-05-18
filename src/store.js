import { createStore } from "redux";
import rootreducers from "./redux/reducers/main";
//import { createStoreHook } from "react-redux";

const store=createStore(
    rootreducers
   
)

export default store;