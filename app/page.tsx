"use client";
import { Filter } from "@/components/Filter";
import { Layout } from "@/components/Layout";
import { PatientCard } from "@/components/PatientCard";
import { usePatients } from "@/hooks/usePatients";

export default function Home() {
  const { patients } = usePatients();

  return (
    <Layout heading="Home">
      <Filter />
      <ul>
        {patients.map((patient) => (
          <PatientCard key={patient.patient_id} patient={patient} />
        ))}
      </ul>
    </Layout>
  );
}
