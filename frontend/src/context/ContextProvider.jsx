import { createContext, useState } from "react";

const darkModeContext = createContext();

const DarkModeContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [authUser, setAuthUser] = useState("");
  const [auth, setAuth] = useState(false);

  return (
    <darkModeContext.Provider
      value={{
        isDarkMode,
        setIsDarkMode,
        authUser,
        setAuthUser,
        auth,
        setAuth,
      }}
    >
      {children}
    </darkModeContext.Provider>
  );
};

export const darkMode = darkModeContext;

export default DarkModeContextProvider;
