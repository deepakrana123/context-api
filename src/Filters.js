import React  from 'react'
import {Form,Button}  from "react-bootstrap";
import { CartState } from './Context';
import Rating from './Rating';
const Filters = () => {
  const {productState:{
    byStock,
    byRating,
    byFastDelivery,
    sort

  },productDispatch}=CartState();
  return (
    <div className="filters">
    <span className="title">Filter Products</span>
    <span>
      <Form.Check
        inline
        label="Ascending"
        name="group1"
        type="radio"
        id={`inline-1`}
        onChange={()=>productDispatch({type:'SORT_BY_PRICE',payload:'HighToLow'})}
        checked={ sort==='HighToLow'?true:false}
      />
    </span>
    <span>
      <Form.Check
        inline
        label="Descending"
        name="group1"
        type="radio"
        id={`inline-2`}
        onChange={()=>productDispatch({type:'SORT_BY_PRICE',payload:'LowToHigh'})}
        checked={ sort ==='LowToHigh'?true:false}
      />
    </span>
    <span>
      <Form.Check
        inline
        label="Include Out of Stock"
        name="group1"
        type="checkbox"
        id={`inline-3`}
        onChange={()=>productDispatch({type:'BYSTOCK'})}
       checked={byStock}
      /> 
    </span>
    <span>
      <Form.Check
        inline
        label="Fast Delivery Only"
        name="group1"
        type="checkbox"
        id={`inline-4`}
        onChange={()=>productDispatch({type:'ByFastDelivery'})}
        checked={byFastDelivery}
      />
    </span>
    <span>
      <label style={{ paddingRight: 10 }}>Rating: </label>
      <Rating
       onClick={(i) =>productDispatch({type:"BYRATING",payload:i})}
        rating={byRating}
        style={{ cursor: "pointer"}}
      />
    </span>
    <Button
      variant="light"
      onClick={() =>productDispatch({type:"CLEAR_FILTER"})}
    >
      Clear Filters
    </Button>
  </div>
  )
}

export default Filters