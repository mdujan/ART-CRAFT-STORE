/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import useAuth from "../../Hook/useAuth";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


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
        <div>

            {
    myItems.map(item=> <div item={item} key={item._id}> <div className="card w-96 bg-base-100 shadow-xl">
    <figure><img src={item.image} alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title">
{item.email}
        <div className="badge badge-secondary">item</div>
      </h2>
      <p>{item.short_description}</p>
      <div className="card-actions justify-end">
        <Link to={`/update/${item._id}`}><button className="badge btn badge-outline">Update</button> </Link>
        <button onClick={()=>handleDelete(item._id)} className="badge btn btn badge-outline">Delete</button>
      </div>   
    </div>
  </div> </div>  )

            }
           {/* <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={item.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div> 
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div> */}
        </div>
    );
};

export default Mylist;