import { usePatients } from "@/hooks/usePatients";
import Link from "next/link";

export default function Home() {
  const { patients } = usePatients();

  return (
    <main>
      <h1>Home</h1>
      <ul>
        {patients.map((patient) => (
          <Link key={patient.patient_id} href={`/detail/${patient.patient_id}`}>
            <li className="">
              <p>{patient.patient_id}</p>
              <p>{patient.first_name}</p>
            </li>
          </Link>
        ))}
      </ul>
    </main>
  );
}
