import { Context, createContext, Dispatch, SetStateAction } from "react";

type UpdateType = Dispatch<SetStateAction<string>>;
// const defaultUpdate: UpdateType = () => !isLogged;

export interface IThemeContext {
  theme: string;
  setTheme: UpdateType;
}

export const ThemeContext = createContext<IThemeContext>(undefined as never);
