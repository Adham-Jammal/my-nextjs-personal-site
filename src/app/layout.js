import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link';
import Image from 'next/image';
import navbarData from "@/Data/navbarData.json";
import { AOSInit } from '@/components/AOSInit';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: `Adham Jammal's Personal Website`,
  description: `Passionate front-end web developer with a talent for crafting visually stunning and user-centric digital experiences using the power of ReactJS. Proficient in HTML, CSS, and JavaScript, I have a proven track record of designing and optimizing websites that captivate and engage users. Adept at seamlessly transforming design concepts into fully functional responsive websites.`,
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
