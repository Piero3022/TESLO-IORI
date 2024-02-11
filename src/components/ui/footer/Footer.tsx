import { titleFont } from '@/config/fonts';
import Link from 'next/link';

export const Footer = () => {
  return (
    <div className="flex w-full h-full p-5 justify-center text-xs mb-10 bg-orange-500">

      <Link
        href='/'
      >
        <span className={`${titleFont.className} antialiased font-bold `}>IORI BIKER </span>
        <span>| shop </span>
        <span>© {new Date().getFullYear()}</span>
      </Link>

      <Link
        href='/'
        className="mx-3"
      >
        Privacidad & Legal
      </Link>

      <Link
        href='/'
        className="mx-3"
      >
        Ubicaciones
      </Link>


    </div>
  )
}