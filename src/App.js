import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/mui/exports';
import './App.css';
import { Login, Products, AddProduct, Orders } from './components/custom/exports';


function App() {


 

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-product" element={<AddProduct/>} />
        <Route path="/orders" element={<Orders/>} />
        <Route path="*" element={`<div>page not found</div>`} />


      </Routes>
    </div>
  );
}

export default App;
