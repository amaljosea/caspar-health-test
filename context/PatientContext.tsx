"use client";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useMemo,
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

  const value = useMemo(
    () => ({
      patients,
      patientFilterControls,
      setPatients,
    }),
    [patients, patientFilterControls, setPatients]
  );

  return (
    <PatientContext.Provider value={value}>{children}</PatientContext.Provider>
  );
};
