import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { EffectCoverflow } from 'swiper/modules';

const Sweper = () => {
    return (
        <>
            
             <Swiper 
       modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
       spaceBetween={50}
       slidesPerView={1}
       onDurationChange={6000}
       effect='coverflow'
       navigation
       pagination={{ clickable: true }}
       scrollbar={{ draggable: true }}
    >
      <SwiperSlide ><img className='rounded-badge relative' src={"https://i.ibb.co/FxHW1dp/siper-lar-2.jpg"} style={{width:"100%", margin: "0% auto"  }}  alt="" 
     data-aos-easing="ease-in-sine" /> <h1 className='w-[13%] animate__animated animate__zoomInRight animate__delay-1s  ml-10 p-4 mx-auto font-semibold text-5xl top-60 right- text-purple-300  absolute'>EXPLORE OUR ART & CRAFT STORE </h1></SwiperSlide>
      <SwiperSlide><img className='rounded-badge  relative ' src={"https://i.ibb.co/KXBM5S7/swiper-large-1.jpg"} style={{width:"100%", margin: "0% auto"}} alt="" data-aos-easing="ease-in-sine"/><h1 className='w-[13%] ml-10 p-4 mx-auto text-zinc-500 font-semibold text-5xl top-60 right-  absolute'>VISITING OUR WEBSITE & EXPRESS YOUR CHOOSE </h1></SwiperSlide>
      <SwiperSlide><img className='rounded-badge relative ' src={"https://i.ibb.co/VDNwHCb/swiper.jpg"} style={{width:"100%"}} alt=""data-aos-easing="ease-in-sine"
      /><h1 className='w-[13%] ml-10 p-4 mx-auto font-semibold text-6xl top-48 right-52 text-teal-100  text-white absolute'>Re-inventing the Art of CRAFT invention </h1></SwiperSlide>
      <SwiperSlide><img className='rounded-badge relative' src={"https://i.ibb.co/VCDpStm/s-large-3.jpg"} style={{width:"100%"}} alt=""data-aos-easing="ease-in-sine" /> <h1 className='w-[12%] ml-10 p-4 mx-auto bg-transparent font text-amber-200 font-semibold text-6xl top-60 right-52 text-white absolute'>Bringing Wellness to ART & CRAFT STORE</h1></SwiperSlide>

    </Swiper>
   
    

        </>
    );
};

export default Sweper;