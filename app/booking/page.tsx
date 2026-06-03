import React from 'react'
import Navbar from "../components/navbar";
import { Droplet } from 'lucide-react';

const page = () => {
  return (
    <div>
      <Navbar />
      <section className='w-full h-full flex items-center justify-center p-4'>
      <div  className='w-[95%] h-[939px] gap-4 flex '>
        <section className='w-[64%] h-[792px] bg-[blue]'>
        <div className='w-[full] flex flex-col h-[72px]'>
            <span className='w-[full] h-[40px] font-inter text-[32px] font-bold '>Passenger Details</span>
            <span className='text-sm text-gray-500 w-[full] h-[40px] font-inter text-[16px] '>Tell us who is traveling. Ensure the information matches your government-issued ID.</span>
        </div>
        <div className='w-full h-[525px] bg-[pink] flex flex-col justify-center items-center gap-8 border border-[#C3C6D7] rounded-lg'>
            <div className='w-[95%] h-[40px] bg-[orange]  text-[#191C1E] font-inter text-[32px] font-semibold  px-4'>Primary Passenger</div>
            <div className='w-[95%] h-[371px] flex flex-wrap rounded-lg gap-4 bg-[white] px-4'>
               
                <span className='w-[49%]  h-[78px] '>
                    <p className='text-sm text-gray-500 font-inter text-[16px]'>First Name</p>
                    <input type="text" className='w-[100%] h-[45px] border border-gray-300 rounded-md px-2' placeholder='First Name' />
                </span>
                <span className='w-[49%] h-[78px] '>
                    <p className='text-sm text-gray-500 font-inter text-[16px]'>Last Name</p>
                    <input type="text" className='w-[100%] h-[45px] border border-gray-300 rounded-md px-2' placeholder='Last Name' />
                </span>
              
                <span className='w-[49%] h-[78px] '>
                    <p className='text-sm text-gray-500 font-inter text-[16px]'>Date of Birth</p>
                    <input type="date" className='w-[100%] h-[45px] border border-gray-300 rounded-md px-2' />
                </span>
                <span className='w-[49%] h-[78px] '>
                    <p className='text-sm text-gray-500 font-inter text-[16px]'>Nationality</p>
                   <input type="text" className='w-[100%] h-[45px] border border-gray-300 rounded-md px-2' placeholder='Nationality' />
                   </span>
                   <div className='w-full h-[1px] bg-[#C3C6D7]'></div>
                   <span className=' w-full h-[30px]  text-[#004AC6] font-inter text-[20px]'>PASSPORT DOCUMENTATION</span>
                     <span className='w-[49%] h-[78px] '>
                    <p className='text-sm text-gray-500 font-inter text-[16px]'>Passport Number</p>
                    <input type="text" className='w-[100%] h-[45px] border border-gray-300 rounded-md px-2' placeholder='Passport Number' />
                </span> 
                <span className='w-[49%] h-[78px] '>
                    <p className='text-sm text-gray-500 font-inter text-[16px]'>Expiration Date</p>
                    <input type="date" className='w-[100%] h-[45px] border border-gray-300 rounded-md px-2' />
                </span> 

            </div>

        </div>
        <div className='w-[95%] h-[40px] bg-[orange]  text-[#191C1E] font-inter text-[32px] font-semibold  px-4'>
            <h2 className='text-xl font-bold px-4 font-inter text-[#191C1E]'>Enhance Your Journey</h2>
            
        </div>
        </section>

        <section className='w-[35%] h-[750px] bg-[green]'>nn</section>
      </div>
      </section>
    </div>
  )
}

export default page