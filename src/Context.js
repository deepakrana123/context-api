import  React,{createContext, useContext, useReducer}  from "react";
import {faker} from "@faker-js/faker"
import { cartReducer, productReducer } from "./Reducers";
const Product=createContext();



faker.seed(20)
const Context=({children})=>{
    const productDeatils=[...Array(20)].map(()=>({
        id:faker.datatype.uuid(),
        name:faker.commerce.productName(),
        price:faker.commerce.price(),
        description:faker.commerce.productDescription(),
        image:faker.image.avatar(),
        inStock:faker.helpers.arrayElement([0,3,5,6,7]),
        fastDelivery:faker.datatype.boolean(),
        ratings:faker.helpers.arrayElement([1,2,3,4,5])
    }))
  
    const [state , dispatch ] =useReducer(cartReducer,{
        product:productDeatils,
        cart:[]
  })
  
const [productState , productDispatch ] =useReducer(productReducer,{
byStock:false,
byRating:0,
byFastDelivery:false,
Searchquery:"",
sort:""

})
    return  <Product.Provider value={{ state , dispatch,productState , productDispatch}}>{children}</Product.Provider>;
}


export default Context;

export const CartState=()=>{
    return useContext(Product)
}