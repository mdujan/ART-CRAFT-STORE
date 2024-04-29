/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import useAuth from "../../Hook/useAuth";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Player } from "@lottiefiles/react-lottie-player";
// import { Player } from "@lottiefiles/react-lottie-player";



const Mylist = () => {
const {user} = useAuth() || {};
const [myItems, setMyItem] = useState([]);
const [control, setControl] = useState(false);

// console.log(user)
useEffect(()=>{
fetch( `http://localhost:5000/mylist/${user?.email}`)
        .then((res)=>res.json())
        .then((data)=>{
            setMyItem(data);
        });
},[user,control]);
                          // DElete :-->
const handleDelete =(id)=>{
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result)=>{
if(result.isConfirmed){
  fetch(`http://localhost:5000/delete/${id}`,{
    method:"DELETE",
  })
.then((res)=>res.json())
 .then((data)=>{
    if(data.deletedCount > 0){
      Swal.fire(
         "Deleted!",
         "Your file has been deleted.",
         "success"
      );
      setControl(!control)
    }
});

}

  })


  

}

    return (
        <div className="">

<div className="w-[17%]"><h2 className="mt-10 ml-6 mx-auto w-[19%] font-bold text-4xl text-stone-700 ">My Art&Craft List</h2>
<hr /></div>
<div>
<Player className="absolute top-24 left-24 "
  autoplay
  loop
  src="https://lottie.host/58d64278-d278-43ae-974e-715d6a2d94ce/Z49brFnRqv.json"
  style={{ height: '70px', width: '90px' }}
>
  
</Player>
</div >



 <div className="w-[50%] mx-auto relative" >
          <div >
<Player className="absolute -top-36 right-36"
  autoplay
  loop
  src="https://lottie.host/3eb1cec0-029c-4994-8792-dd978050d107/vgQV7BLArS.json"
  style={{ height: '100px', width: '100px' }}
>
  
</Player>
</div>

          {
    myItems.map(item=> <div  item={item} key={item._id}>  <div className="-rotate-3  mb-20 card grid-cols-2 w-96 bg-base-100 shadow-xl">
    <figure><img className="absolute rounded-r-2xl top-0 left-96 " src={item.image} alt="Shoes" /></figure>
    <div className="card-body border-2 border-amber-400">
      <h2 className="card-title ">
{item.item_name}
        <div className="badge badge-secondary">Price : { item.price}</div>
      </h2>
      <p className="text-gray-600 font-medium"><span className="font-bold text-amber-700">Description : </span>{item.short_description.slice(0,48)}</p>
<p className="text-gray-600 font-medium text-yellow-700 absolute -bottom-7 -left-10 -rotate-4 rounded-full bg-indigo-100 p-3 shadow-2xl shadow-amber-300" >{item.stock_status}</p>
      <div className="card-actions justify-end">
      {/* {item.price} */}
        <div>
  

        </div>
        <Link to={`/update/${item._id}`}><button className="badge btn badge-outline shadow-inner shadow-blue-800 bg-amber-300 text-black font-semibold">Update</button> </Link>
        <button onClick={()=>handleDelete(item._id)} className="badge btn btn badge-outline border-orange-600 shadow-inner shadow-red-800">Delete</button>
      </div>   
    </div>
  </div> </div>  )

            }



          </div>
           
        </div>
    );
};

export default Mylist;