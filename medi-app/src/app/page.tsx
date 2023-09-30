"use client"
import Image from 'next/image'
import Link from 'next/link'
import { RxHamburgerMenu } from 'react-icons/rx';
import WomanIlustration from './assets/illustration woman.png'
import WomanIlustration2 from './assets/illustration woman2.png'
import crosses from './assets/kreuze.png'
import Form from './components/Form';
import { useState } from 'react';
import { PiAirplaneLandingFill } from 'react-icons/pi';



export default function Home() {
  const [country,setCountry] = useState("")

  return (
    <main className="flex min-h-screen px-4 flex-col bg-[#F9F9F9] relative">
     <div className='flex flex-col items-center gap-4 mx-auto mt-20  '>
      <h1 className='text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold'>Willkommen bei Medicarry ! </h1>
      <h2 className='text-2xl md:text-3xl lg:text-5xl font-bold'> <span className='text-primary'>Reisen</span> leicht gemacht </h2>
      <p className='text-subline lg:text-lg'>Informieren, einpacken und los! Ihr Gesundheitsbegleiter auf jeder Reise.</p>
     </div>

    <div className=' mx-auto w-full mt-28'>
      <Form 
      title="Wohin wollen Sie reisen ?" 
      inputFields={[{ IconComponent: PiAirplaneLandingFill, placeholder: "Flug", onInputChange:(e) => setCountry(e.target.value)  }]} 
      /> 
    </div>
    

    <Image src={crosses} alt="." width={300} height={500} className='w-[20vw] absolute top-20 left-10 hidden xl:block' /> 
    <Image src={crosses} alt="." width={300} height={500} className=' w-[20vw] absolute top-20 right-10 hidden xl:block' /> 
    <Image src={WomanIlustration} alt="." width={200} height={500} className='absolute bottom-20 hidden xl:block' /> 
    <Image src={WomanIlustration2} alt="." width={500} height={500} className='absolute bottom-20 right-2 hidden xl:block' /> 
    </main> 
  )
}
