import { createContext } from "react";

export const UserContext = createContext({
  isLogged: false,
  setIsLogged: (arg: boolean) => {
    return !arg;
  },
});

console.log("UserContext", UserContext);
