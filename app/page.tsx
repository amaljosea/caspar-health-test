import Link from 'next/link'

export default function Home() {
  return (
    <main className="">
      <div className="">
        <p>Home</p>
        <Link href="/detail/22">Detail</Link>
      </div>
    </main>
  )
}
