import { AuthContext } from "context/auth/authContext";
import { useContext } from "react";

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}

export default useAuth;
