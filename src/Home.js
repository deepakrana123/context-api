import React from 'react'
import "./App.css"
import { CartState } from './Context';
import Filters from './Filters';
import SingleProduct from './SingleProduct';
import "./style.css"
const Home = () => {
  const {state:{product},productState:{
    byStock,
    byRating,
    byFastDelivery,
    sort,SearchQuery
  }}=CartState()




  const transformProducts = () => {
    let sortedProducts = product;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? b.price - a.price : a.price - b.price
      );
    }

    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }

    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.ratings >= byRating
      );
    }

    if (SearchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(SearchQuery)
      );
    }

    return sortedProducts;
  };
return (
  <div className="home">
      <Filters/>
      <div className="home-product">
          {transformProducts().map((prod)=>{
              return <SingleProduct prod={prod} key={prod.id}/>
          })}
      </div>
      </div>
)
}

export default Home