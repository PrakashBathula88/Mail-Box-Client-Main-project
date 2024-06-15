import { useContext, createContext, useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../GoogleAuthentication/GoogleConfig";
const AuthContext = createContext({
  token: "",
  isloggedin: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const initilaToken = localStorage.getItem("Auth");
  const [token, setToken] = useState(initilaToken);
  const googleSignin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const isloggedin = !!token;

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("Auth", token);
  };
  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("Auth");
  };

  return (
    <AuthContext.Provider
      value={{ googleSignin, isloggedin, loginHandler, logoutHandler }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
