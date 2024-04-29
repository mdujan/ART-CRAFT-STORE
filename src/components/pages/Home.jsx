import { useLoaderData } from "react-router-dom";
import ItemsCard from "../ItemsCard";
// import { Player } from '@lottiefiles/react-lottie-player';
import { Helmet } from 'react-helmet-async';
import Sweper from "../Sweper";

const Home = () => {
    const items = useLoaderData();
    return (
        <div>
             <Helmet><title> Crft store | Home</title></Helmet>
            <div className="bg-cover">
            {
                <div className="mx-auto  w-[88%]" >
                <Sweper></Sweper>
                </div>
            }
                 <hr />
                <div>
                {/* <Player
  autoplay
  loop
  src="https://lottie.host/7f3c9dc8-6e1e-4bee-bd10-bd0a16cff8de/8xrThp8m0C.json"
  style={{ height: '300px', width: '300px' }}
>
  
</Player> */}
<div className="w-[27%] mx-auto mt-24"><h2 className="mt-10 ml-6 mx-auto w-[100%] font-bold text-4xl text-stone-700 ">My Art&Craft List</h2>
<hr className="mt-14 mb-24"/>

</div>

                </div>
            </div> 
            {/* className="rounded-md   space-y-6 col-span-1  lg:grid grid-cols-3 repeat-no-repeat bg-opacity-5" */}
               <div className="rounded-md   space-y-6 col-span-1 gap-4 m-3  lg:grid grid-cols-3 repeat-no-repeat bg-opacity-5">
               {
                    items.slice(0,6).map(item=> <ItemsCard 
                    key={item._id}
                    item={item}
                    ></ItemsCard>)
                }
               </div>
        </div>
    );
};

export default Home;