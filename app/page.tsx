import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="border-collapse text-4xl"> Naga Sai  <span className='text-xs cursor-pointer ' ><Link href={'/blog'}>Blog</Link></span> </h1>
        <span><sup className='text-xs'>Software Engineer</sup></span>
    </main>
  )
}
