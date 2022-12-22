import { Context, createContext, Dispatch, SetStateAction } from "react";

type UpdateType = Dispatch<SetStateAction<boolean>>;
// const defaultUpdate: UpdateType = () => !isLogged;

interface UsCont {
  isLogged: boolean;
  setIsLogged: UpdateType;
}

export const UserContext = createContext<UsCont>({
  isLogged: false,
  setIsLogged: () => {},
});
