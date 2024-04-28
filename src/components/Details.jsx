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
            <h2>details dekacceimg
                <img src={items.image} alt="" />
            </h2>
        </div>
    );
};

export default Details;