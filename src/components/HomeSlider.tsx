
'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const slides = [
  {
    id: 1,
    title: 'Premium Steel Products',
    description: 'High-quality materials for all your construction needs.',
    image: '/images/slider1.jpg',
  },
  {
    id: 2,
    title: 'Trusted by Professionals',
    description: 'Supplying to top builders and engineers across India.',
    image: '/images/slider1.jpg',
  },
  {
    id: 3,
    title: 'Reliable & On-Time Delivery',
    description: 'We ensure timely delivery for all bulk orders.',
    image: '/images/slider1.jpg',
  },
];

export default function HomeSlider() {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-[400px] md:h-[500px] w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="h-full w-full bg-cover bg-center flex items-center justify-center text-center text-white px-4"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="bg-black/60 p-6 rounded-xl max-w-xl">
                <h2 className="text-2xl md:text-4xl font-bold mb-2">
                  {slide.title}
                </h2>
                <p className="text-sm md:text-base">
                  {slide.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
