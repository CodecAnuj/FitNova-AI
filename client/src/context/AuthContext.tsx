// This file will manage global authentication state.
// Later we will store:
// - logged in user
// - auth loading state
// - login function
// - logout function
// - session restore

import {
  createContext,
  useEffect,
  useState,
} from "react";

import api from "../api/axios";

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

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const fetchCurrentUser =
      async () => {
        try {
          const response =
            await api.get("/users/me");

          setUser(response.data.user);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };

    fetchCurrentUser();
  }, []);

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