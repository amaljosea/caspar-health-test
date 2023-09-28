import Link from "next/link";
import { Patient } from "..";

type PatientCardProps = {
  patient: Patient;
};

export const PatientCard = ({ patient }: PatientCardProps) => {
  return (
    <Link key={patient.patient_id} href={`/detail/${patient.patient_id}`}>
      <li className="border-solid border-2 border-red-600 m-4">
        <p>{patient.patient_id}</p>
        <p>{patient.first_name}</p>
      </li>
    </Link>
  );
};
