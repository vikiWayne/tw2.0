import { ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import { AuthContext } from "./authContext";
import { User } from "./types";

type AuthProviderProps = {
  children: ReactNode;
};

function sleep(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function AuthProvider(props: AuthProviderProps) {
  const { children } = props;

  const [user, setUser] = useState<User>();

  const login = useCallback(
    async (username: string, password: string): Promise<boolean> => {
      if (username === "admin" && password === "admin@123") {
        await sleep(2000);
        setUser(username);
        return true;
      }
      return false;
    },
    []
  );

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  useEffect(() => {
    login("admin", "admin@123");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const contextValues = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [login, logout, user]
  );

  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
