import Link from "next/link";
import { Patient } from "..";
import { simpleclassName } from "@/constants";

type PatientCardProps = {
  patient: Patient;
};

export const PatientCard = ({ patient }: PatientCardProps) => {
  return (
    <Link key={patient.patient_id} href={`/detail/${patient.patient_id}`}>
      <li className={simpleclassName}>
        <p>{patient.patient_id}</p>
        <p>{patient.first_name}</p>
      </li>
    </Link>
  );
};