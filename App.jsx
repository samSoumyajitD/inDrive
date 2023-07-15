import "./App.css";
import Nav from "./components/Nav";
import Select from "./components/Select";
import Conatct from "./components/Contact";
import Inter from "./components/InterCity";
import Explore from "./components/explore.jsx";
import Pick from "./components/pickndrop";
import Self from "./components/selfride";
import Minor from "./components/Minor";
import Chat from './components/chat';
import Pay from './components/Pay';
import { BrowserRouter ,Routes, Route } from "react-router-dom";
import IntraBooking from "./components/intrabook";


import React from "react";
export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
<Route path="/" element={<section className="h-screen ">

<div className="h-full bg-image ">
  <Nav/>
  <div className=' pl-auto pr-auto items-center justify-center'></div>
  <Select/>


 
</div>
</section>}/>
<Route exact path="/contact" element={<section className="h-screen ">

<div className="h-full bg-image ">
  <Nav/>
  <div className=' pl-auto pr-auto items-center justify-center'></div>
  <Conatct/>


 
</div>
</section>} />
<Route exact path="/specialcare" element={<section className="h-screen ">

<div className="h-full bg-image ">
  <Nav/>
  <div className=' pl-auto pr-auto items-center justify-center'></div>
  <Minor/>


 
</div>
</section>} />
<Route exact path="/intercity"  element={<section className="h-screen ">

<div className="h-full bg-image ">
  <Nav/>
  <div className=' pl-auto pr-auto items-center justify-center'></div>
  <Inter/>


 
</div>
</section>}/>



  <Route exact path="/intrabook"  element={<section className="h-screen ">

<div className="h-full bg-image ">
  <Nav/>
  <div className=' pl-auto pr-auto items-center justify-center'></div>
  <IntraBooking/>


 
</div>
</section>}/>
<Route exact path="/explore" element={<section className="h-screen ">

<div className="h-full bg-image ">
  <Nav/>
  <div className=' pl-auto pr-auto items-center justify-center'></div>
  <Explore/>


 
</div>
</section>}/>
<Route exact path="/pickndrop" element={<section className="h-screen ">

<div className="h-full bg-image ">
  <Nav/>
  <div className=' pl-auto pr-auto items-center justify-center'></div>
  <Pick/>


 
</div>
</section>}/>
<Route exact path="/self" element={<section className="h-screen ">

<div className="h-full bg-image ">
  <Nav/>
  <div className=' pl-auto pr-auto items-center justify-center'></div>
  <Self/>


 
</div>
</section>}/>
<Route exact path="/pay" element={<section className="h-screen ">

<div className="h-full bg-image ">
  <Nav/>
  <div className=' pl-auto pr-auto items-center justify-center'></div>
  <Pay/>


 
</div>
</section>}/>
<Route exact path="/chat" Component={Chat}/>
</Routes>
</BrowserRouter>  

    </>
  
   
  )
}
