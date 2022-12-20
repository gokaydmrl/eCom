import { Context, createContext, Dispatch, SetStateAction } from "react";
interface UsCont {
  isLogged: boolean;
  setIsLogged: Dispatch<SetStateAction<boolean>>;
}
export const UserContext = createContext({
  isLogged: false,
  setIsLogged: (): void => {},
});
