import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProductCard(props) {  /* product images */
  const navigate=useNavigate();
  return (
    <div className='card m-2 cursor-pointer' style={{width:300}} role='button' onClick={()=>navigate(`/product/${props.id}`)}>                   {/* here style:width used for center of image , curser-pointer means that our curser style , if onclick=navigate used for if click product then showing for id number*/}
          <div className='mt-2'>
            <img src={props.thumbnail} height={150} width={180} alt={props.title}  className='border-radius' />
          </div>
          <div className='card-body'>
              <h5 className='card-title'>{props.title}</h5>
              <h6 className='mt-2'>Price : {`$${props.price}`}</h6>
              <h6 className='mt-2'>Discount : {props.discountPercentage}</h6>
              <h6 className='mt-2'>Rating : {props.rating}</h6>
            <div className='mt-4'>
              {props.stock > 0 ? <button className='btn btn-primary btn-outline-warning'>Avilable</button> : <button className='btn btn-outline-danger'>Out Of Stock</button>}
            </div>
          </div>
    </div>
  )
}
