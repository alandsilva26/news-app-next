import React, { useState, useContext, createContext } from "react";

const defaultState = {
  country: "us",
  setCountry: () => {},
};

const SettingsContext = createContext<ContextType>(defaultState);

export const useSettings = () => {
  return useContext(SettingsContext);
};

const SettingsProvider: React.FC = ({ children }) => {
  const [country, setCountry] = useState<string>("us");

  const value: ContextType = {
    country,
    setCountry,
  };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;

export interface ContextType {
  country: string;
  setCountry: (country: string) => void;
}
