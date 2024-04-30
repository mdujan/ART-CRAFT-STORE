/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";


const SubCatagory = ({item}) => {
    const {subcategory_name,image,description,price}=item;
    return (
        <div className="">
            <Link to={`/catDetails/${subcategory_name}`} className=" w-[60%] mx-auto h-[30%] m-10  shadow-xl rounded-2xl shadow-amber-300 ">
        <div className="card card-side bg-base-100 shadow-xl">
            <figure>
                <img className="w-[100%] h-full " src={image} alt="Movie" />
            </figure>
            <div className="card-body">
                <h2 className="card-title   text-purple-950">{subcategory_name}</h2>
                <p className="font-semibold text-yellow-700">Description : {description.slice(0,38)}</p>
                <div className=" left-0 top-0 absolute bg-blue-100 rounded-br-2xl   text-amber-400 pr-3 font-bold"><span className="text-zinc-400 p-3  font-bold">PRICE :</span>{price} </div>
                <Player
                    autoplay
                    loop
                    src="https://lottie.host/7f3c9dc8-6e1e-4bee-bd10-bd0a16cff8de/8xrThp8m0C.json"
                    style={{ height: '80px', width: '100px' }}
                >

                </Player>

                {/* <div className="card-actions ">
<Link to={`/details/${_id}`} className="btn text-yellow-700 mr-10 shadow-inner shadow-teal-500 border-amber-100  text-xl">View Details</Link>
</div> */}
            </div>
        </div>
    </Link>
        </div>
    );
};

export default SubCatagory;