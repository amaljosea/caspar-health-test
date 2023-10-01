"use client";
import { ReactNode, createContext, useState } from "react";
import patientsInitialData from "../mock_data.json";
import { Patient } from "..";
import {
  PatientFilterControls,
  usePatientFilterControls,
  defaultPatientFilter,
} from "@/hooks/usePatientFilterControls";

type PatientContextType = {
  patients: Patient[];
  patientFilterControls: PatientFilterControls;
};

export const PatientContext = createContext<PatientContextType>({
  patients: [],
  patientFilterControls: {
    patientFilter: defaultPatientFilter,
    changePatientFilter: () => {},
  },
});

type PatientContextProviderProps = {
  children: ReactNode;
};

export const PatientContextProvider = ({
  children,
}: PatientContextProviderProps) => {
  const [patients] = useState(patientsInitialData);
  const patientFilterControls = usePatientFilterControls();

  return (
    <PatientContext.Provider
      value={{
        patients,
        patientFilterControls,
      }}
    >
      {children}
    </PatientContext.Provider>
  );
};
