import React from "react";
import "./App.css";

//import {Routes, Route} from "react-rou ter-dom"
//import Navbar from './components/Navbar Section/Navbar'
import Middle from "./components/Middle Section/Middle";
//import Cards from './components/Card Section/Cards'
import Footer from "./components/Footer Section/Footer";
import Navbar from "./components/Navbar Section/Navbar";
import Header from "./components/Header Section/Header";
import Signin from "./components/GoogleSignIn/Signin";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Middle />
      <Footer />

    </>
  );
}

export default App;
