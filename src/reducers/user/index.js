import { combineReducers } from "redux";
import userTodo from "./userReducer";

const userReducer = combineReducers({
    userTodo
});

export default userReducer;