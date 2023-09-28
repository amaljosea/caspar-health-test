import { Layout } from "@/components/Layout";
import Link from "next/link";

type DetailPageProps = { params: { id: string } };

export default function Detail({ params }: DetailPageProps) {
  return (
    <Layout heading="Detail" nav={<Link href="/">Back</Link>}>
      <p>id: {params.id}</p>
      <button>Delete</button>
    </Layout>
  );
}
