import { createStore, combineReducers } from "redux";
import userReducer from "./userReducer";
// import studentReducer from "./studentReducer"
import { composeWithDevTools } from "redux-devtools-extension";
const mainReducer = combineReducers({
  user: userReducer,
  // student:studentReducer
});
const commonData = {
  user: {
    items: [
      {
        id: 1,
        name: "demo",
        email: "demo@gmail.com",
        username: "dumy",
        mobile: "876443",
        password: "abc@123",
      },
      {
        id: 2,
        name: "justify",
        email: "just@gmail.com",
        username: "just",
        mobile: "43234",
        password: "abc@1234",
      },
    ],
  },
  student: {
    studentId: 123,
    marks: 90,
  },
};
const store = createStore(mainReducer, commonData, composeWithDevTools());
export default store;
