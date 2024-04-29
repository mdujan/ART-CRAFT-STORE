import { useLoaderData } from "react-router-dom";
import ItemsCard from "../ItemsCard";
// import { Player } from '@lottiefiles/react-lottie-player';
import { Helmet } from 'react-helmet-async';
import Sweper from "../Sweper";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useRef } from "react";
const Home = () => {
    const items = useLoaderData();
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

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


<div className="w-[30%]  mx-auto bg-cover ">
<div className="w-[100%] mx-auto mt-24"><h2 className="mt-10 ml-6 mx-auto w-[100%] font-extrabold text-4xl text-stone-700 ">Upcoming Production</h2>
<hr className="mt-14 bg-black mb-24"/>
<hr className=" bg-black mt-2"/>

</div>
<>
      <Swiper
        spaceBetween={1}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide><img className='rounded-badge ' src={"https://i.ibb.co/dL9KyR8/28359-1.jpg"} style={{width:"100%", margin: "0% auto"  }}  alt="" 
     data-aos-easing="ease-in-sine" /></SwiperSlide>
        <SwiperSlide><img className='rounded-badge ' src={"https://i.ibb.co/Yd7zF6k/top-view-tailor-working-fabric.jpg"} style={{width:"100%", margin: "0% auto"  }}  alt="" 
     data-aos-easing="ease-in-sine" /></SwiperSlide>
        <SwiperSlide><img className='rounded-badge ' src={"https://i.ibb.co/f42V7h8/aditya-wardhana-2-Tnr1-FMHy2g-unsplash.jpg"} style={{width:"100%", margin: "0% auto"  }}  alt="" 
     data-aos-easing="ease-in-sine" /></SwiperSlide>
        <SwiperSlide><img className='rounded-badge ' src={"https://i.ibb.co/Yd7zF6k/top-view-tailor-working-fabric.jpg"} style={{width:"100%", margin: "0% auto"  }}  alt="" 
     data-aos-easing="ease-in-sine" /></SwiperSlide>
        <SwiperSlide><img className='rounded-badge ' src={"https://i.ibb.co/dL9KyR8/28359-1.jpg"} style={{width:"100%", margin: "0% auto"  }}  alt="" 
     data-aos-easing="ease-in-sine" /></SwiperSlide>
   
        <div className="autoplay-progress relative" slot="container-end">
          <svg className="absolute  top-0" viewBox="0 0 0 0" ref={progressCircle}>
            <circle  cx="4" cy="4" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
</div>


        </div>
    );
};

export default Home;