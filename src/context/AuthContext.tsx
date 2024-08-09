import { createContext, useEffect, useState } from "react";

export type authTypes = {
  children: React.ReactNode;
};

export const AuthContext = createContext({});

export const AuthProvider = ({ children }: authTypes) => {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ token, setToken, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
