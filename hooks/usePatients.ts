import { useContext } from "react";
import { PatientContext } from "@/context/PatientContext";

export const usePatients = () => {
  const { patients } = useContext(PatientContext);
  return {
    patients,
  };
};
