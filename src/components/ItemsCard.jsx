import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";

const itemsCard = ({item}) => {


    
    const {image,_id,
        item_name,subcategory_name, price,rating,customization, processing_time,stock_status,
        user_name}=item;
        // , email
    return (
        <div>
             <div  data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="2000">
         <div className="border-2  relative shadow-yellow-400  max-w-lg  rounded-badge shadow-lg m-3 dark:bg-gray-50 dark:text-gray-900 " data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" >
        <img data-aos="fade-down-right" src={image} alt="" className="shadow-purple-400 shadow-2xl bg-neutral-200  fit-cover w-full rounded-t-xl  h-72 dark:bg-gray-500" />
        <div className=" space-x-4 rounded-t-lg p-1 absolute -top-9 left-1 border-b-black ">
        <span className=" bg-gray-600 rounded-t-lg p-2 font-semibold text-amber-400">{price}</span>
        <span className=" bg-teal-300 rounded-t-lg rounded-l-lg p-2 font-semibold text-purple-800">{stock_status}</span>
        </div>
        <div className=" space-x-1 p-2 pt-2   relative  "data-aos="fade-down-right">
        <span className="rounded-md mb-10 bg-zinc-500   p-2 font-semibold  text-purple-100 ml-4">{processing_time}</span>
        <span className="rounded-full p-2 font-semibold text-purple-800 bg-orange-300 absolute -top-6 -left-4 p-2">{user_name}</span>
        </div>
        <div className="mt-3 mb-2"data-aos="zoom-in-bottom">
            <h2 className="ml-3 text-2xl font-bold tracking-wide">{item_name}</h2>
        </div>
        <p className="dark:text-gray-800 font-bold text-slate-500 p-1 ml-3">{subcategory_name}</p>
        <hr />
        
        <div className=" flex justify-between p-3" data-aos="fade-down-right">
            <p className="font-bold text-lg text-amber-500 text-fuchsia-400">Customization : {customization}</p>
            <p className="ml-16 font-bold">Rating :  <span className="font-bold text-neutral-500">{rating}</span> </p>
           
        </div>
     

        <p className="text-sm bg-slate-100 font-bold w-[20%] p-1 text-center mx-auto  rounded-full"></p>
         <Link to={`/details/${_id}`}><button className="p-4 w-[90%] mx-auto btn mb-5 mt-4 ml-5  bg-purple-600 bg text-purple-200 font-semibold">View Details</button></Link>
         <Player className="absolute top-24 left-24 "
  autoplay
  loop
  src="https://lottie.host/8eefa778-8041-4fd1-a383-515059f150bd/1ZFkDPIbhS.json"
  style={{ height: '200px', width: '200px' }}
>
  
</Player>
    </div>
    
       </div>
    
        </div>
    );
};

export default itemsCard;