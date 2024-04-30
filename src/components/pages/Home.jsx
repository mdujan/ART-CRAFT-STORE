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
import { Player } from "@lottiefiles/react-lottie-player";
// import { Player } from "@lottiefiles/react-lottie-player";
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
             <Helmet><title> Art & Craft | Home</title></Helmet>
             <Player className="absolute top-0 left-20 "
autoplay
loop
src="https://lottie.host/8eefa778-8041-4fd1-a383-515059f150bd/1ZFkDPIbhS.json"
style={{ height: '100px', width: '130px' }}
>

</Player>
            <div className="bg-cover">
            {
                <div className="mx-auto  w-[88%]" >
                <Sweper></Sweper>
                </div>
            }
            {/* <Player className="absolute top-24 left-24 "
autoplay
loop
src="https://lottie.host/8eefa778-8041-4fd1-a383-515059f150bd/1ZFkDPIbhS.json"
style={{ height: '190px', width: '180px' }}
>

</Player>
                  */}
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
<div className="w-[100%] mx-auto mt-24"><h2 className="mt-10 ml-4 mx-auto w-[100%] font-extrabold text-4xl text-stone-700 ">Upcoming Production</h2>
<hr className="mt-10 bg-black mb-24"/>
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
    <div>
    

    </div>
</div>
<div>
            
            <section className="py-6 dark:bg-gray-100 dark:text-gray-900 bg-purple-200 mt-20 shadow-2xl shadow-inner shadow-purple-400">
	<div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
		<div className="py-6 md:py-0 md:px-6">
			<h1 className="text-4xl font-bold">Get in touch</h1>
			<p className="pt-2 pb-4">Fill in the form to start a conversation</p>
			<div className="space-y-4">
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
					</svg>
					<span>1807 Sk Mujib Road, Agrabad City</span>
				</p>
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
					</svg>
					<span>123456789</span>
				</p>
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
						<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
					</svg>
					<span>contact@business.com</span>
				</p>
			</div>
		</div>
		<form noValidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
			<label className="block">
				<span className="mb-1">Full name</span>
				<input type="text" placeholder=" Login name" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100" />
			</label>
			<label className="block">
				<span className="mb-1">Email address</span>
				<input type="email" placeholder=" login email" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100" />
			</label>
			<label className="block">
				<span className="mb-1">Message</span>
				<textarea rows="3" className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100"></textarea>
			</label>
			<button type="button" className="self-center btn px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-violet-600 dark:text-gray-50 focus:dark:ring-violet-600 hover:dark:ring-violet-600 ring-purple-600 shadow-2xl shadow-inner shadow-purple-800">Submit</button>
		</form>
	</div>
</section>
            
        </div>

        </div>



    );
};

export default Home;