import React, { useState, useEffect, useContext, createContext } from "react";
import { COUNTRY_LIST } from "./config";

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
