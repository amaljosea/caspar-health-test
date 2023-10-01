import { useCallback, useContext, useMemo } from "react";
import { PatientContext } from "@/context/PatientContext";
import { confirmAlert } from "react-confirm-alert";
import { useRouter } from "next/navigation";
import "react-confirm-alert/src/react-confirm-alert.css";

type UseDeletePatient = {
  id?: number;
};

export const useDeletePatient = ({ id }: UseDeletePatient) => {
  const { setPatients } = useContext(PatientContext);
  const router = useRouter();

  const deletePatient = useCallback(() => {
    confirmAlert({
      title: "Delete",
      message: `Are you sure you want to delete ${id}?`,
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            router.push("/");
            setPatients((patients) =>
              patients.filter((patient) => patient.patient_id !== id)
            );
          },
        },
        {
          label: "No",
        },
      ],
    });
  }, [id]);

  return {
    deletePatient,
  };
};
