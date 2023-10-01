import Link from "next/link";
import { Patient } from "..";

type PatientCardProps = {
  patient: Patient;
};

export const PatientCard = ({ patient }: PatientCardProps) => {
  return (
    <Link key={patient.patient_id} href={`/detail/${patient.patient_id}`}>
      <li className="container">
        <p>{patient.patient_id}</p>
        <p>
          {patient.first_name} {patient.last_name}
        </p>
        <p>{patient.gender}</p>
        <p>{patient.age}</p>
      </li>
    </Link>
  );
};
