import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Success() {
    const [count,setCount]=useState(15);
    const navigate=useNavigate();

    useEffect(() => {
      
        setInterval(()=>{setCount((count)=>count-1) },1000)

        setTimeout((count)=>navigate('/'),15000)
    }, [navigate])
    
  return (
    <h4 className='mt-5' style={{color:'lightblue'}}>Your Order Has Been Added Successfully. You Will be redirected in{' '} {count} seconds.</h4>
  )
}
