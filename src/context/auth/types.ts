export type User = string | null | undefined;

export type InitialStateType = {
  user: User;
  login: (username: string, password: string) => void;
  logout: () => void;
};
