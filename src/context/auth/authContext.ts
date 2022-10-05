import { createContext } from "react";
import { InitialStateType } from "./types";

const initialState: InitialStateType = {
  user: null,
  login: async () => false,
  logout: () => {},
};

export const AuthContext = createContext<InitialStateType>(initialState);
