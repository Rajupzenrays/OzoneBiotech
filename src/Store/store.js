import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import rootReducer from "./Reducer/rootReducer";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
