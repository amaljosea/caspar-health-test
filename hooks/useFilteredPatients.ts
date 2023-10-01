import { useContext, useMemo } from "react";
import { PatientContext } from "@/context/PatientContext";
import { getFilteredPatients } from "@/utils/filter/getFilteredPatients";
import { getSortedPatients } from "@/utils/filter/getSortedPatients";

export const useFilteredPatients = () => {
  const { patients, patientFilterControls } = useContext(PatientContext);

  const {
    patientFilter: { gender, age, search, sort },
  } = patientFilterControls;

  const value = useMemo(() => {
    const { filteredPatients } = getFilteredPatients({
      patients,
      filters: { gender, age, search },
    });
    const filteredAndSortedPatients = getSortedPatients({
      patients: filteredPatients,
      sort,
    });
    return { patients: filteredAndSortedPatients };
  }, [gender, age, search, patients, sort]);

  return value;
};
