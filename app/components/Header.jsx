import {
  SignInButton,
  // SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui/button'
import { LayoutDashboard, PenBox } from 'lucide-react'
import { checkUser } from '@/lib/checkUser'

const Header = async()=> {
  await checkUser();
  return (
    <div 
    className='fixed top-0 w-full backdrop-blur-md z-50 
    border-b'>
    <nav className='container mx-auto px-4 py-3 flex items-center justify-between'>
      <div className="flex items-center mb-6 md:mb-0">
        <div className="w-8 h-8 rounded-md bg-gradient-to-r from-blue-400 to-blue-300 flex items-center justify-center mr-2">
                  <Link href="/">
                      <Image
                      src={"/logo1.png"}
                      alt="my logo"
                      height={90}
                      width={300}
                      className='h-10 w-auto object-contain'
                      />
                  </Link>
                  
                </div>
                <span className="text-xl text-green-400 font-bold">FinanceJini</span></div>
                
       

      <div className='flex items-center space-x-4'>
        <SignedIn>
          <Link href="/dashboard" className='text-gray-600 hover:text-blue-500 flex  items-center gap-2'>
          <Button variant="outline">
            <LayoutDashboard size={18}/>
            <span className='hidden md:inline'>Dashboard</span>
          </Button>
          </Link>


          <Link href="/transaction/create">
          <Button  className="flex items-center gap-2">
            <PenBox size={18}/>
            <span className='hidden md:inline'>Transaction</span>
          </Button>
          </Link>
        </SignedIn>


        <SignedOut>
          <SignInButton forceRedirectUrl='/dashboard'>
          <Button variant="outline" >Login</Button>
          </SignInButton>   
          {/* <SignUpButton/> */}
        </SignedOut>
        <SignedIn>
          <UserButton appearance={{
            elements:{
              avatarBox:"w-10 h-10"
            },
          }
            
          } />
        </SignedIn>
      </div>
      </nav>
    </div>
  )
}

export default Header