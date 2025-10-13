import React from 'react';
import logoHeader from '@/public/images/react-core-concepts.png';
import Image from 'next/image';

export default function Header() {
  return (
<header id='cabecera' className='flex flex-col items-center justify-center font-sixtyfour bg-slate-800'>
    <Image src={logoHeader} alt="React Concepts" width={150} />
    <h1 className='w-5/6 text-center text text-3xl font-extrabold bg-gradient-to-r from-purple-700 to-violet-300 bg-clip-text text-transparent'>
    Conceptos básicos de React
    </h1>
    <h2 className="w-5/6 m-4 text-xl text-slate-200 text-left md:text-center font-sans">Cuatro conceptos fundamentales para entender React</h2>

</header>
  )
}
