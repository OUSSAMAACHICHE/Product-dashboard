// context
import { createContext, useState } from "react";
export const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState(null);
  const showAlertMsg = (message) => {
    setAlert(message);
    setTimeout(() => setAlert(null), 2000);
  };
  return (
    <AlertContext.Provider value={{ alert, showAlertMsg }}>
      {children}
    </AlertContext.Provider>
  );
};
