/* import React from 'react'

export default function ProductListitems(props) {
  return (
    <div className='d-flex m-4 align-items-center justify-content-center'>                   
              <div className='mt-2'>
            <img src={props.thumbnail} height={150} width={180} alt={props.title}  className='border-radius me-4' />
          </div>
          
              <h5 className='card-title me-4'>{props.title}</h5>
              <h6 className='mt-2 me-4'>Price : {`$${props.price}`}</h6>
              <h6 className='mt-2 me-4'>Discount : {props.discountPercentage}</h6>
              <h6 className='mt-2 me-4'>Rating : {props.rating}</h6>
            
              <button className='btn btn-primary btn-danger ms-3' onClick={props.incrementItem}>+</button>
                    <span className='ms-3'> Quantity {props.count}</span>
              <button className='btn btn-danger ms-3' onClick={props.decrementItem}>-</button>
              <button className='btn btn-danger ms-3'onClick={props.removeItem}>Remove</button>
            </div>
  )
} */


/* For Responsive */

 import React from 'react'

export default function ProductListitems(props) {
  return (
    <div className='container-fluid'>
      <div className='row justify-content-center'>
        <div className='col-12 col-md-6 col-lg-4 col-xl-3'>
          <div className='card m-4'>
            <img src={props.thumbnail} height={150} width={180} alt={props.title} className='card-img-top border-radius' />
            <div className='card-body'>
              <h5 className='card-title'>{props.title}</h5>
              <h6>Price: ${props.price}</h6>
              <h6>Discount: {props.discountPercentage}</h6>
              <h6>Rating: {props.rating}</h6>
            </div>
            <div className='card-footer'>
              <button className='btn btn-primary btn-danger me-3' onClick={props.incrementItem}>+</button>
              <span>Quantity: {props.count}</span>
              <button className='btn btn-danger ms-3' onClick={props.decrementItem}>-</button>
              <button className='btn btn-danger ms-3' onClick={props.removeItem}>Remove</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 

