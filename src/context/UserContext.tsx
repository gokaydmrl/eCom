import { Context, createContext, Dispatch, SetStateAction } from "react";
interface UsCont {
  isLogged: boolean;
  setIsLogged: (arg: boolean) => void;
}
export const UserContext: UsCont = createContext({
  isLogged: false,
  setIsLogged: () => {},
});
