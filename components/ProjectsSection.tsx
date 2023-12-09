'use client'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'

import { Navigation, Scrollbar, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Link from 'next/link'

export default function ProjectsSection({ items }) {
  return (
    <div className="w-full relative">
      <div className="mb-10">
        <div className="space-y-2 pb-2 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h1>
          <div className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Some of the non-commercial and open source projects I've created
          </div>
        </div>

        <Link
          href="/projects"
          className="flex items-center text-base font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
          View all projects
          <svg
            aria-hidden="true"
            className="w-5 h-5 ml-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
      <Swiper
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={20}
        cssMode
        slidesPerView={3}
        breakpoints={{
          '0': { slidesPerView: 1.2 },
          '650': { slidesPerView: 2 },
          '1400': { slidesPerView: 3 },
        }}
        className="mySwiper"
        autoplay
        navigation={{
          nextEl: '.swiper-custom-button-next',
          prevEl: '.swiper-custom-button-prev',
        }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {items.map((d, idx) => (
          <SwiperSlide key={idx}>{d}</SwiperSlide>
        ))}
      </Swiper>

      <div className="flex items-center mt-10 relative justify-center">
        <button
          type="button"
          className="flex items-center justify-center h-full mr-4 cursor-pointer group focus:outline-none swiper-custom-button-prev"
          data-carousel-prev
        >
          <span className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
            <svg
              aria-hidden="true"
              className="w-7 h-7"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>

        <button
          type="button"
          className="flex items-center justify-center h-full cursor-pointer group focus:outline-none swiper-custom-button-next"
          data-carousel-next
        >
          <span className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
            <svg
              aria-hidden="true"
              className="w-7 h-7"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  )
}
