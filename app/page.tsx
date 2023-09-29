"use client";
import { Filter } from "@/components/Filter";
import { Layout } from "@/components/Layout";
import { PatientCard } from "@/components/PatientCard";
import { useFilteredPatients } from "@/hooks/useFilteredPatients";

export default function Home() {
  const { patients, filterControls } = useFilteredPatients();

  return (
    <Layout heading="Home">
      <Filter filterControls={filterControls} />
      <ul>
        {patients.map((patient) => (
          <PatientCard key={patient.patient_id} patient={patient} />
        ))}
      </ul>
    </Layout>
  );
}
