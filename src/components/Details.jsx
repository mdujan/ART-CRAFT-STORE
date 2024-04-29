import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Details = () => {
    const {id}=useParams();
    console.log(id);
    const[items, setItems]=useState({});

useEffect (()=>{
        fetch(`http://localhost:5000/singleItem/${id}`)
        .then(res =>res.json())
        .then(data =>{
            setItems(data)
            console.log(data);
        })
},[id])
console.log(items)

    return (
        <div>
<h1 className="mt-10 mb-6 mx-auto w-[19%] font-bold text-4xl ">View Item</h1>
<hr  className="bg-black w-[29%] mx-auto "/>
<div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
<div className="w-[100%] mt-1 mx-auto ">
<div className=" card lg:card-side bg-base-100 shadow-xl bg-stone-300 m-14  ">
<div className="rounded-xl p-7 bg-gray-100 mr-8 w-full  m-1 shadow-purple-400  shadow-2xl">  <img className="rounded-sm h-full w-full" src={items.image} alt="Album"/>
</div>


  <div className="card-body w-[100%] mt-3" >
    <h2 className="card-title text-3xl font-extrabold">{items.item_name}</h2>
    <p className="dark:text-gray-800 lg:text-lg font-bold text-slate-500 mt-2 flex-grow-0 ">Customization :  <span className="text-purple-500" >{items.customization}</span></p>
    <hr />
    <p className="flex-grow-0  text-2xl py-2 font-bold text-amber-600 ">{items.
subcategory_name}</p>
    <hr />
    
    <p className="text-lg"><span className="font-bold mt-0 mr-3">Description : </span>{items.short_description}</p>
    <p className="py-1 mt- "><span className="font-extrabold text-center w-[4%]  mx-auto">User Information :</span> 
    </p>
    <span className="mx-2 text-center bg-slate-100 p-2 rounded-full text-purple-500   font-semibold  ">Name : {items.user_name
    }</span> 
    {
        items.user_email?<span className="mx-2 text-center bg-slate-100 p-2 rounded-full text-purple-500   font-semibold  ">Email : {items.user_email}</span>: <span className="mx-2 text-center bg-slate-100 p-2 rounded-full text-purple-500   font-semibold  ">Email : {items.email}</span>
    }
    <span className="mx-2 text-center bg-purple-200 p-2 rounded-full text-purple-500   font-semibold  ">{}</span>
    <hr />
    <ul className="p-2 ">
        {/* <li className="mb-2"><span className="text-gray-500 font-semibold"></span> <span className="pl-[10%] font-extrabold"></span> </li> */}
        <li className="mb-2  "><span className="text-gray-500 font-semibold">Rating :</span> <span className="pl-[10%] font-extrabold">{items.rating}</span> </li>
        <li className="mb-2 mt-3"><span className="text-gray-500 font-semibold">Procerssing time :</span> <span className="pl-[1%] font-extrabold">{items.processing_time}</span> </li>
       
        <li className="mb-2 mt-5"><span className="text-gray-500 font-semibold">Price :</span> <span className="px-[6%] ml-10   bg-zinc-700 rounded-md p-3 mt-4 text-amber-400 font-extrabold">{items.price}</span> </li>
        
       
    </ul>
    <div className="mb-6  justify-end">
      <button  className="p-3  ml-96 text-purple-500 text-xl font-bold outline px-10 mr-7">cart</button>
    </div>
  </div>
</div>  
    
        </div>
</div>
        </div>
    );
};

export default Details;