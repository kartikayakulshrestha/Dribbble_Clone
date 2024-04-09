import React from 'react'
import {useSelector} from "react-redux"
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { RiMailCheckFill } from "react-icons/ri";
const Verif = () => {
  const email = useSelector((state) => state.counter.email)
  
  return (
    <div className='relative'>
      <Navbar />
      
      <div className="min-w-[95vw] mt-12">
      
      <h1 className='text-4xl font-bold text-center'>Please verify your email...</h1>
      <div className="flex justify-center"><RiMailCheckFill className=' fill-slate-400' size={110}/>
      </div>
      <p className='text-lg text-slate-600  text-center'>Please verify your email address. We've sent a confirmation email to:</p>
      <h4 className='text-xl font-bold text-center'>{email}</h4>
      <div className='text-lg  text-center '>
      Click the confirmation link in that email to begin using Dribbble<br />
        Didn't receive the email? Check your Spam folder, it may have been caught by a filter. If<br></br>
         you still don't see it, you can <span className='font-semibold text-[#EA4B8B]'>resend the confirmation email.</span></div>

      <br />
      <p className='text-lg  text-center '>Wrong email address? <span className='font-semibold text-[#EA4B8B]'>Change it</span></p> 
      </div>
      <div className='min-h-[80vh]'></div>
      <Footer />
    </div>
  )
}

export default Verif
