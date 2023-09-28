import Link from 'next/link'

type DetailPageProps = { params: { id: string } }

export default function Detail({ params }: DetailPageProps) {
  return (
    <main className="">
      <div className="">
        <Link href="/">Back</Link>
        <p>Detail page</p>
        <p>id: {params.id}</p>
      </div>
    </main>
  )
}