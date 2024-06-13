'use client'

import { Swiper as SwiperObject } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { useState } from 'react';
import './slideshow.css';
import Image from 'next/image';

interface Props{
    images: string[]
    title: string
    className?:string
}

export const ProductSlideShow = ({images,title,className}:Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>();
  return (
    <div className={className}>
        <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        } as React.CSSProperties}
        loop={true}
        spaceBetween={10}
        navigation={true}
        autoplay={{
          delay:2500
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs,Autoplay]}
        className="mySwiper2"
      >
        {
            images.map(image=>(
                <SwiperSlide key={image}>
                    <Image 
                        width={1024}
                        height={800}
                        alt={title}
                        src={`/products/${image}`}
                        className='rounded-lg object-fill'
                        />
                </SwiperSlide>
            ))
        }

      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {
          images.map(image=>(
              <SwiperSlide key={image}>
                  <Image 
                      width={300}
                      height={300}
                      alt={title}
                      src={`/products/${image}`}
                      className='rounded-lg object-fill'
                      />
              </SwiperSlide>
          ))
        }

      </Swiper>
    </div>
  );
};