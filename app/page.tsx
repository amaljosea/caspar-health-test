"use client";
import { PatientFilter } from "@/components/PatientFilter";
import { Layout } from "@/components/Layout";
import { PatientCard } from "@/components/PatientCard";
import { useFilteredPatients } from "@/hooks/useFilteredPatients";

export default function Home() {
  const { patients } = useFilteredPatients();

  return (
    <Layout heading="Home">
      <PatientFilter />
      <ul className="patient-list">
        {patients.map((patient) => (
          <PatientCard key={patient.patient_id} patient={patient} />
        ))}
        {patients.length === 0 && <p>No patients for the applied filter</p>}
      </ul>
    </Layout>
  );
}
