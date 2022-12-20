import { Context, createContext, Dispatch, SetStateAction } from "react";
// const isLogged = false;

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
