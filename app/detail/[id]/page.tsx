"use client";
import { Layout } from "@/components/Layout";
import { useSinglePatient } from "@/hooks/useSinglePatient";
import Link from "next/link";

type DetailPageProps = { params: { id: string } };

export default function Detail({ params }: DetailPageProps) {
  const { patient } = useSinglePatient({ id: params.id });
  return (
    <Layout heading="Detail" nav={<Link href="/">Back</Link>}>
      {patient && (
        <>
          <img src={patient.avatar} />
          <p>id: {patient.patient_id}</p>
          <p>first_name: {patient.first_name}</p>
          <p>last_name: {patient.last_name}</p>
          <p>email: {patient.email}</p>
          <p>gender: {patient.gender}</p>
          <p>age: {patient.age}</p>
          <button>Delete</button>
        </>
      )}
      {!patient && <p>Error: Patient not found!</p>}
    </Layout>
  );
}
