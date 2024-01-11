import React from "react";
import Product from "./Product";

// export default function ProductList({product})   //destructured method of using {product}
export default function ProductList(props) {
  //props best method, but irreplaceble values
  // console.log(props);
  return ( 
    props.productList.length > 0 ?
    props.productList.map((product, i) => {         //map function or for each function.
      return <Product product={product} key={i} incrementQuantity={props.incrementQuantity} decrementQuantity={props.decrementQuantity} index={i} removeItem = {props.removeItem} /> 
    })  //couldn't use key={i}, So again declared index={i}.
    : <h1>Please add Products in the Cart</h1>
  )
}
