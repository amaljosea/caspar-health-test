"use client";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { noop } from "lodash";
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
  setPatients: Dispatch<SetStateAction<Patient[]>>;
};

export const PatientContext = createContext<PatientContextType>({
  patients: patientsInitialData,
  setPatients: noop,
  patientFilterControls: {
    patientFilter: defaultPatientFilter,
    changePatientFilter: noop,
  },
});

type PatientContextProviderProps = {
  children: ReactNode;
};

export const PatientContextProvider = ({
  children,
}: PatientContextProviderProps) => {
  const [patients, setPatients] = useState(patientsInitialData);
  const patientFilterControls = usePatientFilterControls();

  return (
    <PatientContext.Provider
      value={{
        patients,
        patientFilterControls,
        setPatients,
      }}
    >
      {children}
    </PatientContext.Provider>
  );
};
