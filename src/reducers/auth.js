import { AUTH, LOGOUT } from "../constants/actionTypes";

const initialState = {
    authData: localStorage.getItem("profile")
      ? JSON.parse(localStorage.getItem("profile"))
      : null,
  };

const authReducer = (state = initialState , action) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
            return {...state, authData: action?.data};

        case LOGOUT:
            localStorage.clear();
            return {...state, authData: null};

        default:
          return state;
    }
};

export default authReducer;