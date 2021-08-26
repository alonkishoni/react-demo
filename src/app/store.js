import { createStore } from "redux";

const initialFormDetails = {
  firstName: "",
  lastName: "",
  phone: "",
  address: "",
};

function Reducer(
  state = {
    formDetails: initialFormDetails,
    loggedIn:
      localStorage.getItem("currentUser") === "" ||
      localStorage.getItem("currentUser") === null
        ? false
        : true,
  },
  action
) {
  switch (action.type) {
    case "user/firstName":
      state.formDetails.firstName = action.firstName;
      return state;
    case "user/lastName":
      state.formDetails.lastName = action.lastName;
      return state;
    case "user/phone":
      state.formDetails.phone = action.phone;
      return state;
    case "user/address":
      state.formDetails.address = action.address;
      return state;
    case "user/loggedIn":
      state.loggedIn = action.loggedIn;
      if (action.loggedIn === false) {
        state.formDetails.address = "";
        state.formDetails.phone = "";
        state.formDetails.lastName = "";
        state.formDetails.firstName = "";
      }
      return state;
    default:
      return state;
  }
}

let store = createStore(Reducer);
export default store;
