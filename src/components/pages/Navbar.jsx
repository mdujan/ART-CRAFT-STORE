// import {  NavLink } from "react-router-dom";

import { Link, NavLink } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import useAuth from "../../Hook/useAuth";
import image from '../../assets/2248.jpg'
import { useEffect, useState } from "react";

const Navbar = () => {
  const [theme, setTheme]= useState('light')

useEffect(()=>{
localStorage.setItem('theme',theme)
const localTheme = localStorage.getItem('theme')
document.querySelector('html').setAttribute('data-theme', localTheme)

},[theme])

  const handleToggle = (e) =>{
    if(e.target.checked){
      setTheme('dracula')
    } else {
      setTheme('light')
    }
  }
  // console.log(theme)
    const links =<>


   
    <NavLink to={'/'}  className={({ isActive }) => isActive ? "text-primary font-bold text-xl font-semibold " :"text-xl font-semibold hover:text-red-800"}><li>Home</li></NavLink>
    <NavLink to={'/allitems'} className={({ isActive }) => isActive ? "text-primary font-bold text-xl font-semibold " :"text-xl font-semibold hover:text-red-800"}><li>All Items</li></NavLink>
    <NavLink to={'/add'} className={({ isActive }) => isActive ? "text-primary font-bold text-xl font-semibold " :"text-xl font-semibold hover:text-red-800"}><li>Add Items</li></NavLink>
    <NavLink to={'/mylist'} className={({ isActive }) => isActive ? "text-primary font-bold text-xl font-semibold " :"text-xl font-semibold hover:text-red-800"}><li>My List</li></NavLink>
    
                
     </>
const {logOut,user}=useAuth()
console.log(user)
    return (
        <div className=" rounded-b-2xl  shadow-sky-400 w-full mx-auto ">
        <div  className="navbar border bg-base-100 border-t-2 rounded-t-xl mt-3 h-[90px] bg-cover  "
        //  style={{backgroundImage: 'url(https://i.ibb.co/nnHyJ0F/5570863.jpg)'}} 
         >
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <div className="">
                {links}
                </div>
              </ul>
            </div >
            <a className=" text-2xl font-bold text-stone-500 ml-4 bg-cover" >ART  <span className=" text-2xl font-bold text-purple-500  "  >&</span> CRAFT  </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
            <div className="flex space-x-14 text-xl font-bold ">
                {links}
                </div>
            </ul>
          </div>
        <div className="navbar-end rounded-full mr-3">
        <div className="mx-3 ">
        <input onClick={handleToggle} type="checkbox"  className="toggle theme-controller bg-purple-700 border-purple-400 [--tglbg:theme(colors.purple.200)] checked:bg-purple-800 checked:border-purple-800 checked:[--tglbg:theme(colors.purple.100)] row-start-1 col-start-1 col-span-2"/>
        </div>
        {user ? <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="  btn-circle ">
                <div className="w-fit h-full rounded-full">
                  {
                    user?.photoURL?<img title={user?.displayName} className="w-full h-full rounded-full" alt="" src={user?.photoURL} />: <img   className=" w-18 rounded-full" src={image} alt="" />
                  }
                </div><span ><RiArrowDropDownLine className="ml-3 text-xl"/> </span>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content hover:tooltip-open z-[2] p-2 shadow bg-base-100 rounded-box w-52">
               
                <li><a className="text-teal-500 font-semibold"> {user.email}</a></li>
                <li><a className="font-bold" onClick={logOut}>Logout</a></li>
              </ul>
            
            
            </div>  : 
             <div className="dropdown dropdown-end">
          <div className="">
                <div className="rounded-md w-[89px] bg-purple-300">
                  <Link to={'login'} className="btn btn-outline w-full text-black-500 ">Login</Link >
                </div>
              </div>   
            
            </div> }
        
        
        </div>
        </div>
        </div> 
        
    );
};

export default Navbar;