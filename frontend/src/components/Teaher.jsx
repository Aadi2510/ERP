import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Navbar'
import UserContext from '../context/UserContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Teacher() {
    let {pass} = useContext(UserContext)
    let navigation = useNavigate()
    let [data, setData] = useState([])
    useEffect(()=>{
        getData()
        },[])
    async function getData(){
        if(pass){
            let result = await axios.get(`http://localhost:4000/api/getTeacher/${pass}`)
        setData(result.data)
        }else{
            navigation('/')
        }
    }
  return (
    <>
<Navbar title='Teacher Portal'/>

<div>
    {data.map((data)=>(
 <div className="w-[300px] rounded-md border">
 <img
   src={`http://localhost:4000/${data.image}`}
   alt="Laptop"
   className="h-[200px] w-full rounded-md object-cover"
 />
 <div className="p-4">
   <h1 className="text-lg font-semibold">Name:- <span className='font-bold'>{data.name}</span></h1>
   <h1 className="text-lg font-semibold">email:- <span className='font-bold'>{data.email}</span></h1>
   <h1 className="text-lg font-semibold">sallery:- <span className='font-bold'>{data.sallery}</span></h1>
   <h1 className="text-lg font-semibold">bacthes:- <span className='font-bold'>{data.batches}</span></h1>
   <button
     type="button"
     className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
   >
     Read
   </button>
 </div>
</div>
    ))}
</div>
   
    </>
  )
}
