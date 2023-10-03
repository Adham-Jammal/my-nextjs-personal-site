import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link';
import Image from 'next/image';
import navbarData from "@/Data/navbarData.json";
import { AOSInit } from '@/components/AOSInit';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AOSInit />
      <body className={inter.className}>
        <nav className='navbar'>
          {navbarData.map((page) => (
            <Link href={page.link} key={page.id}>
              <Image src={page.icon}
                width={25}
                height={25}
                alt={page.name} />
            </Link>
          ))}
        </nav>
        <div className="body-content">
          {children}
        </div>
      </body>
    </html>
  )
}
