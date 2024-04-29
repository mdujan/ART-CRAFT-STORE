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
      <SwiperSlide ><img className='rounded-badge relative' src={"https://i.ibb.co/h11kg3x/3d-room-interior-with-classic-design-furniture.jpg"} style={{width:"100%", margin: "0% auto"  }}  alt="" 
     data-aos-easing="ease-in-sine" /> <h1 className='w-[13%] animate__animated animate__zoomInRight animate__delay-1s  ml-10 p-4 mx-auto font-semibold text-5xl top-60 right- text-purple-200  absolute'>EXPLORE OUR LUXARY REAL STATE & CHECK </h1></SwiperSlide>
      <SwiperSlide><img className='rounded-badge  relative ' src={"https://i.ibb.co/vqt9XYX/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge.jpg"} style={{width:"100%", margin: "0% auto"}} alt="" data-aos-easing="ease-in-sine"/><h1 className='w-[13%] ml-10 p-4 mx-auto text-purple-300 font-semibold text-5xl top-60 right-  absolute'>SIGNIFING THE PINNACLE OF HOME LUXARY LIVING </h1></SwiperSlide>
      <SwiperSlide><img className='rounded-badge relative ' src={"https://i.ibb.co/HrVfm3W/scenic-view-sandy-beach-beach-with-sun-beds-umbrellas-open-against-sea-mountains-hotel-resort-tekiro.jpg"} style={{width:"100%"}} alt=""data-aos-easing="ease-in-sine"
      /><h1 className='w-[13%] ml-10 p-4 mx-auto font-semibold text-6xl top-48 right-52 text-amber-200 text-white absolute'>Re-inventing the Art of Real Estate </h1></SwiperSlide>
      <SwiperSlide><img className='rounded-badge relative' src={logo} style={{width:"100%"}} alt=""data-aos-easing="ease-in-sine" /> <h1 className='w-[12%] ml-10 p-4 mx-auto bg-transparent font text-amber-200 font-semibold text-6xl top-60 right-52 text-white absolute'>Bringing Wellness to LUXARY State</h1></SwiperSlide>

    </Swiper>
   
    

        </>
    );
};

export default Sweper;