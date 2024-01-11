import React, { useState } from "react"; // imported because of set state line
// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";       //import Footer from "./components/Footer.js"; can also be written
import AddItem from "./components/AddItem";    // declared for additem file. 

function App() {    //*** while using class or state, we should use this.props or this.state */
  const products = [
    //declared array by {}, not object
    {
      name: "IPhone Smart 14 Pro",
      price: 99999,
      Quantity: 0,
    },
    {
      name: "Redmi 11R",
      price: 9999,
      Quantity: 0,
    },
  ];
  let [productList, setProductlist] = useState(products); // let [read, write] = useState([]) []= array, "products": is argument
  let [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    // changed "incre....ty (index) {}" to "const incrementQuantity = (index) => {    }" because function is defined in function or class.
    let newProductList = [...productList]; // "..." means spreading with spread operator.
    let newTotalAmount = totalAmount;
    newProductList[index].Quantity++;
    newTotalAmount += newProductList[index].price;
    setTotalAmount(newTotalAmount)
    setProductlist(newProductList);
  };

  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    // newProductList[index].Quantity > 0
    //   ? newProductList[index].Quantity--               
    //   : (newProductList[index].Quantity = 0);
    // newTotalAmount -= newProductList[index].price    // // commented lines totally because of this line, because i used if condition for both conditions of quantity and totalAmount
    if (newProductList[index].Quantity > 0) {
      newProductList[index].Quantity--;
      newTotalAmount -= newProductList[index].price;
    }
    setTotalAmount(newTotalAmount)
    setProductlist(newProductList);
  };

  const resetQuantity = () => {
    let newProductList = [...productList];
    newProductList.map((products) =>{
      products.Quantity = 0
    })
    setProductlist(newProductList);
    setTotalAmount(0);
  };
  
  const removeItem = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -= newProductList[index].Quantity * newProductList[index].price;
    newProductList.splice(index,1);
    // console.log(newProductList)         //debug purpose.
    setProductlist(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const addItem = (name, price) => {      //declare ADDItem funtn which is opposite to remove funtion; & taking parameters of name & price.
    let newProductList = [...productList];      
    newProductList.push({                 //
      price:price,
      name:name,
      Quantity: 0
    });
    setProductlist(newProductList);
  }

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <AddItem addItem={addItem}/>
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem = {removeItem}
        />    {/* // productList is propsName */}
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity}/>
    </>
  );
}

export default App;