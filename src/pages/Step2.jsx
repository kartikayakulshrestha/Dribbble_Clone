import React from 'react'
import spink from "../assets/pink.png"
import {useState} from "react"
import { BiSolidCameraPlus } from "react-icons/bi";
import {useNavigate} from "react-router-dom"
const Step2 = () => {
    const [img,setimg]=useState("")
    const [city,setCity]=useState(undefined)
    const navigate=useNavigate()
    function handleChange(e){
        e.preventDefault()
        var reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        reader.onload=()=>{
          
          setimg(reader.result)
    
        }
        reader.onerror=(err)=>{
          console.log(err)
        }
      }
    function handleSubmit(){
        navigate("/signup/step3")
    }
  return (
    <div>
      <div className=' min-h-[100vh]'>
        <div className='ml-[40px] mb-4'>
            <img className='' src={spink} height={"40px"} width={"100px"}/>

        </div>
        <div className=' min-h-[450px] mx-[350px]'>
            <div className='text-5xl font-bold'>Welcome! Let's create your profile</div>
            <div className='ml-2 text-slate-500 mt-3'>Let others get to know you better! You can do these later</div>
            <form onSubmit={handleSubmit}>
                <h2 className='text-2xl mt-4 font-bold'>Add an avatar</h2>
                <div className='grid lg:grid-cols-6'>
                    <div className='col-span-2'>
                        {
                            img?<figure className='mt-5  '>
                            <img className='rounded-full h-[200px] w-[200px] border-4 border-grey-400 border-dashed'  src={img} />
                        </figure>:
                        <figure className='mt-5  '>
                        <div className='rounded-full h-[200px] w-[200px] border-4 border-grey-400 border-dashed' >
                            <BiSolidCameraPlus size={30} className='m-[80px]' />
                        </div>
                    </figure>
                        }
                        
                    </div>
                    <div className='col-span-4 py-[50px] px-[30px]'>
                        <label htmlFor="addimg">
                            <div className='py-3 px-5 w-[150px] border border-slate-400 rounded-xl'>Choose image</div>
                        </label>
                        <input type="file" id="addimg" className='hidden' accept='Image/*' onChange={handleChange} ></input> 
                        <p className='text-slate-400 mt-6'> &gt; Or choose one of our defaults</p>
                    </div>
                    
                </div>
                <h2 className='text-2xl mt-4 font-bold'>Add your location</h2>
                <input type="text" className='mt-5 w-[90%] border border-b-2 p-3' placeholder="Enter the city" value={city} onChange={(e)=>{setCity(e.target.value)}}></input>
                <button type="submit" className={`${img && city?"bg-[#EA4B8B]":"bg-[#ea8fb3]"} mt-10 text-lg rounded-xl text-white px-12 py-2`} disabled={img && city?false:true}> Next</button>
                {img && city?<p className='text-slate-400'>or please return</p>:true}
            </form>
        </div>
      </div>
    </div>
  )
}

export default Step2
