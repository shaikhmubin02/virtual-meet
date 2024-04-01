import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNav from './ui/MobileNav'
import { SignedIn, UserButton } from '@clerk/nextjs'

const Navbar = () => {
  return (
    <nav className='flex flex-between fixed z-50 w-full
     bg-dark-1 px-6 py-4 lg:px-10'>
        <Link href="/" className='flex items-center gap-1'>
            <Image 
            src="/icons/vmlogo.png" 
            width={32}
            height={32}
            alt="vm logo"  
            className="max-sm:size-10" 
            />
            <p className='text-[26px] font-normal
             text-white max-sm:hidden'>Virtual Meet</p>
        </Link>    

        <div className='flex-between gap-5'>
          <SignedIn>
            <UserButton />
          </SignedIn>

          <MobileNav />
        </div>


    </nav>
  )
}

export default Navbar