"use client";
import { ReactNode, createContext, useState } from "react";
import patientsInitialData from "../mock_data.json";
import { Patient } from "..";

type PatientContextType = { patients: Patient[] };

export const PatientContext = createContext<PatientContextType>({
  patients: [],
});

type PatientContextProviderProps = {
  children: ReactNode;
};

export const PatientContextProvider = ({
  children,
}: PatientContextProviderProps) => {
  const [patients] = useState(patientsInitialData);

  return (
    <PatientContext.Provider value={{ patients }}>
      {children}
    </PatientContext.Provider>
  );
};
