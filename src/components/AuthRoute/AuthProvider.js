import { createContext, useState } from "react";
const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const [roles, setRoles] = useState();
  const getAuthData = JSON.parse(localStorage.getItem("auth"));
  if (getAuthData && !auth) {
    setAuth(getAuthData);
  }
 
  return (
    <AuthContext.Provider value={{ auth, setAuth, roles, setRoles }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
