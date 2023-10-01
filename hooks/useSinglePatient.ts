import { useContext, useMemo } from "react";
import { PatientContext } from "@/context/PatientContext";

type UseSinglePatient = {
  id: string;
};

export const useSinglePatient = ({ id }: UseSinglePatient) => {
  const { patients } = useContext(PatientContext);

  const patient = useMemo(
    () => patients.find((i) => i.patient_id.toString() === id),
    [id, patients]
  );
  return {
    patient,
  };
};
