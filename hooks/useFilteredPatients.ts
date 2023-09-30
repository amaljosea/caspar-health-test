import { useContext, useMemo, useState } from "react";
import { PatientContext } from "@/context/PatientContext";
import { getFilteredPatients } from "@/utils/filter/getFilteredPatients";
import { getSortedPatients } from "@/utils/getSortedPatients";

export const useFilteredPatients = () => {
  const { patients, filterControls } = useContext(PatientContext);

  const { gender, age, search, sort } = filterControls;

  const { filteredAndSortedPatients } = useMemo(() => {
    const { filteredPatients } = getFilteredPatients({
      patients,
      filters: { gender, age, search },
    });
    const filteredAndSortedPatients = getSortedPatients({
      patients: filteredPatients,
      sort,
    });
    return { filteredAndSortedPatients };
  }, [gender, age, search, patients, sort]);

  return {
    patients: filteredAndSortedPatients,
    filterControls,
  };
};
