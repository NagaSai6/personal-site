import Image from 'next/image'
import Link from 'next/link'
import HomeBanner from './_components/HomeBanner/HomeBanner'
export default function Home() {
  return (
    <main className="">
        <HomeBanner />
        <h1 className="border-collapse text-4xl"> Naga Sai  <span className='text-xs cursor-pointer ' ><Link href={'/blog'}>Blog</Link></span> </h1>
        <span><sup className='text-xs'>Software Engineer | IIT Madras</sup></span>
    </main>
  )
}
