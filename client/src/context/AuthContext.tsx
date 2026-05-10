// This file will manage global authentication state.
// Later we will store:
// - logged in user
// - auth loading state
// - login function
// - logout function
// - session restore

import {
  createContext,
  useState,
} from "react";

import type {
  AuthContextType,
  User,
} from "../types/auth.types";

export const AuthContext =
  createContext<AuthContextType | null>(
    null
  );

const AuthProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] =
    useState<User | null>(null);

  const [loading] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;