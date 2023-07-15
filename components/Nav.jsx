import React, { useState } from 'react'
import Button from './Button';
import img1 from '../images/logo.svg'; 
const Nav =()=> {
    let Links =[
      {name:"Home",link:"/"},
     
      {name:"About",link:"/"},
     
      {name:"Help",link:"/"},
    ];
    let [open,setOpen]=useState(false);
  return (
    <div className='shadow-md w-full  top-0 left-0'>
      <div className='md:flex items-center justify-between bg-green-400 py-4 md:px-10 px-7'>
      <div className='font-bold text-xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
        <span className='text-3xl text-white mr-1 pt-2'>
        <img src={img1} className='z-[2]' alt="logo" ></img>
        </span>
       
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static border-b-1 border-white bg-green-400 md:z-auto z-[1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <a href={link.link} className='text-gray-800 hover:text-white duration-300'>{link.name}</a>
            </li>
          ))
        }
        <Button>
          Logout
        </Button>
      </ul>
      </div>
    </div>
  )
}

export default Nav