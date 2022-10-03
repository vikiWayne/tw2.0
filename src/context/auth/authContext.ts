import { createContext } from "react";
import { InitialStateType } from "./types";

const initialState: InitialStateType = {
  user: null,
  login: () => {},
  logout: () => {},
};

export const AuthContext = createContext<InitialStateType>(initialState);
