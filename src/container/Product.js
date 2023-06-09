import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ProductLists } from '../data/ProductLists';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/reducer/cart';

export default function Product() {   /* if we click product images its showing from product cardproduct details */
  const params = useParams();
  const dispatch= useDispatch();
  const navigate=useNavigate();
  const props = ProductLists.find(  /* if we click product image ,showing product title */
    (element) => element.id === parseInt(params.id)
  );

  const [alert,setAlert]=useState(false);

  const list=useSelector((state)=>state.cart.list);
  const element = list.find((item)=> item.id === props.id);


  const addToCart = () =>{
        setAlert(true);
        setTimeout(()=>setAlert(false),3000)
          dispatch(addItem(props));
  }
  return (
    <div className='card m-2'>
      {alert && <span className='alert alert-success'>Item Added To Cart.</span>}

      <h1 style={{textAlign:'center',color:'orangered'}}>Product Description</h1>
      
      <div className='mt-2'>
        <img src={props.thumbnail} height={350} width={400} alt={props.title} className='border-radius' />
      </div>
      <div className='mt-3 card-body'>
        <h5 className='card-title'>{props.title}</h5>
        <h6 className='mt-2'>Brand : {props.brand}</h6>
        <h6 className='mt-2'>Category : {props.category}</h6>
        <h6 className='mt-2'>Price : {`$${props.price}`}</h6>
        <h6 className='mt-2'>Discount : {props.discountPercentage}</h6>
        <h6 className='mt-2'>Description: {props.description}</h6>
        <h6 className='mt-2'>Rating : {props.rating}</h6>
        <h6 className='mt-2'>Stock : {props.stock}</h6>
        <div className='mt-4'>
          {props.stock > 0 ? 
          <>
          <button className='btn btn-primary btn-outline-warning' onClick={()=>navigate(`/checkout/${props.id}`)}>Buy Now</button>
          { element?.count > 0 ? (<button className='ms-4 btn  btn-outline-warning' onClick={()=>navigate('/cart')}>Go To Cart
          </button> ):
          (<button className='ms-4 btn btn-primary btn-outline-warning' onClick={addToCart}>Add To Cart</button>
          )}
          </> : (
          <button className='btn btn-outline-danger'>Out Of Stock</button>)}
        </div>
      </div>
    </div>
  )
}
