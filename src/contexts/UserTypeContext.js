import { createContext } from "react";

export const userTypes = {
  admin: "admin",
  user: "user",
  unAuthenticated: "unAuthenticated",
};

export const UserTypeContext = createContext({
  type: userTypes.user,
  changeType: (type) => {},
});
