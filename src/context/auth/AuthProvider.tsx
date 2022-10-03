import { ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import { AuthContext } from "./authContext";
import { User } from "./types";

type AuthProviderProps = {
  children: ReactNode;
};
function AuthProvider(props: AuthProviderProps) {
  const { children } = props;

  const [user, setUser] = useState<User>();

  const login = useCallback((username: string, password: string) => {
    if (username === "admin" && password === "admin@123") {
      setUser(username);
    }
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  useEffect(() => {
    login("admin", "admin@123");
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
