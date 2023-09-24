import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList.js";
import Footer from "./components/Footer.js";
import AddItem from "./components/AddItem.js";
import React, { useState } from "react";

function App() {
  const products = [
    {
      price: 480000,
      name: "Xiaomi Redmi K20 Pro",
      quantity: 0,
    },
    {
      price: 214990,
      name: "Huawei Mate 30 RS Porsche",
      quantity: 0,
    },
    {
      price: 199900,
      name: "Apple iPhone 15 Pro Max",
      quantity: 0,
    },
    {
      price: 159990,
      name: "Motorola Rizr Rollable",
      quantity: 0,
    },
  ];

  let [productList, setProductList] = useState(products);
  let [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price;
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
    }
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  const resetQuantity = () => {
    let newProductList = [...productList];
    newProductList.map((products) => {
      products.quantity = 0;
    });
    setProductList(newProductList);
    setTotalAmount(0);
  };

  const removeItem = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount-= newProductList[index].quantity*newProductList[index].price;
    newProductList.splice(index,1)
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const addItem = (name,price)=>{
    let newProductList = [...productList];
    newProductList.push({
      price:price,
      name:name,
      quantity:0
    });
    setProductList(newProductList);
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
          removeItem={removeItem}
        />
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity}/>
    </>
  );
}

export default App;
