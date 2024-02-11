"use client";
import { useEffect, useState } from 'react';

import Link from "next/link";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";

import { titleFont, orbitron } from "@/config/fonts";
import { useCartStore, useUIStore } from "@/store";

import Image from 'next/image'


export const TopMenu = () => {

  const openSideMenu = useUIStore((state) => state.openSideMenu);
  const totalItemsInCart = useCartStore((state) => state.getTotalItems());

  const [loaded, setLoaded] = useState(false);



  useEffect(() => {
    setLoaded(true);
  }, [])



  return (

    <>
      <div className=' relative h-screen overflow-hidden'>

        {/* Video de fondo */}
        <video autoPlay muted loop preload="auto"
          className="absolute inset-0 w-full h-full object-cover">
          <source src="https://res.cloudinary.com/drdeyo2st/video/upload/v1707593560/IORI/w5ys5rur2v18bl9udkzl.webm" type="video/mp4" />
          <track src="https://res.cloudinary.com/drdeyo2st/video/upload/v1707593560/IORI/w5ys5rur2v18bl9udkzl.webm" kind="subtitles" label="English" />
          Your browser does not support the video tag.
        </video>

        {/* Contenido superpuesto (imagen, barra de navegación) */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-0 bg-transparent">
          {/* Imagen centrada */}
          <Image
            className='absolute top-15 bg-transparent'
            src='https://res.cloudinary.com/drdeyo2st/image/upload/v1707591438/IORI/oyt0hplues7rlsxu3nig.png'
            width={600}
            height={600}
            alt="Descripción de la imagen"
          />

          {/* Barra de navegación con fondo transparente
          
          */}

        </div>
      </div>
      <nav className="flex flex-row px-20 p-30 justify-between items-center w-full bg-orange-500 z-15">

        {/* Logo */}
        <div className='m-2 p-2 rounded-md transition-all hover:text-black  text-white'>
          <Link href="/">
            <span className={`${titleFont.className} antialiased font-bold  `}>
              Iori Biker
            </span>
            <span> | Shop</span>
          </Link>
        </div>

        {/* Center Menu */}
        <div className="hidden sm:block">
          <Link
            className="m-2 p-2  rounded-md transition-all hover:bg-gray-100 hover:text-black text-white"
            href="/gender/men"
          >
            MOTOS
          </Link>
          <Link
            className="m-2 p-2 rounded-md transition-all  hover:bg-gray-100 hover:text-black  text-white"
            href="/gender/women"
          >
            ACCESORIOS
          </Link>
          <Link
            className="m-2 p-2 rounded-md transition-all  hover:bg-gray-100 hover:text-black text-white"
            href="/gender/kid"
          >
            ROPA
          </Link>
        </div>


        <div className="flex items-center">
          {/* Search,
            <Link href="/search" className="mx-2">
              <IoSearchOutline className="w-6 h-6  rounded-md transition-all text-white" />
            </Link> */}
          <Link href={
            ((totalItemsInCart === 0) && loaded)
              ? '/empty'
              : "/cart"
          } className="mx-2">
            <div className="relative">
              {(loaded && totalItemsInCart > 0) && (
                <span className="fade-in absolute text-xs px-3  rounded-md font-bold -top-2 -right-2 bg-red-500 text-white">
                  {totalItemsInCart}
                </span>
              )}
              <IoCartOutline className="w-8 h-8 p-1 rounded-md transition-all hover:bg-gray-100 hover:text-black " />
            </div>
          </Link>

          <button
            onClick={openSideMenu}
            className="m-2 p-2 rounded-md transition-all hover:bg-gray-100 hover:text-black  text-white"
          >
            Menú
          </button>
        </div>
      </nav>

    </>
  );
};



