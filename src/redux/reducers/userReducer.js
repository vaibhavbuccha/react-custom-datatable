import { user } from "../constants/Action-Types";
export default userReducer = (user, action) => {
  if (action.type == "user") {
    return user;
  }
};
