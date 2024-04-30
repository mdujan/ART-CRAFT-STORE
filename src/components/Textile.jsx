/* eslint-disable react/no-unknown-property */
// import { Player } from "@lottiefiles/react-lottie-player";
// import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import SubCatagory from "./SubCatagory";
// import useAuth from "../Hook/useAuth";



const Textile = () => {
    // const {user} = useAuth() || {};
    const [myItems, setMyItem] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/textile")
            .then((res) => res.json())
            .then((data) => {
                setMyItem(data);
            });
    }, []);

    return (
        <div>
<div className="w-[30%] mx-auto "><h2 className="mt-10  mb-9 mx-auto w-[100%] font-bold text-4xl text-stone-700 ">Art & Craft Categories</h2></div>
<hr className="border-2  text-black w-[20%] mx-auto mb-24"/>

<div className=" grid grid-cols-3 gap-10 col-span-1" >{
            myItems.slice(0, 6).map(item => <SubCatagory item={item} key={item._id}> </SubCatagory>)
        }

        </div>



        </div>
       

    );
};

export default Textile;