import { PatientCard } from "@/components/PatientCard";
import { usePatients } from "@/hooks/usePatients";

export default function Home() {
  const { patients } = usePatients();

  return (
    <main>
      <h1>Home</h1>
      <ul>
        {patients.map((patient) => (
          <PatientCard key={patient.patient_id} patient={patient} />
        ))}
      </ul>
    </main>
  );
}
