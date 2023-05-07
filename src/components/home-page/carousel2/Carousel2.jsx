import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.scss";

// import required modules
import { Pagination, Navigation } from "swiper";

// images
import img1 from "../../../assets/carousel2/img1.png"

export default function Carousel2() {

    const carouselList = [
        {
            title: "ПОЧЕМУ МЫ",
            header: "Меньше теории, больше практики",
            text: "80% обучения в нашем центре составляет практика, ведь практика - лучший инструмент для получения качественных знаний и опыта",
            img: img1
        },
        {
            title: "ТОЛЬКО У НАС",
            header: "Меньше теории, больше практики",
            text: "80% обучения в нашем центре составляет практика, ведь практика - лучший инструмент для получения качественных знаний и опыта",
            img: img1
        },
        {
            title: "БЕСПЛАТНЫЕ БОНУСЫ",
            header: "Меньше теории, больше практики",
            text: "80% обучения в нашем центре составляет практика, ведь практика - лучший инструмент для получения качественных знаний и опыта",
            img: img1
        },
        {
            title: "ЧТО ВЫ ПОЛУЧИТЕ",
            header: "Меньше теории, больше практики",
            text: "80% обучения в нашем центре составляет практика, ведь практика - лучший инструмент для получения качественных знаний и опыта",
            img: img1
        },
    ]

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            console.log(className)
            return `
            <div class="${className} flex gap-2">
                ${carouselList[index].title}
                <div style="display:flex; justify-content:center; gap:5px;">
                    <div style="width: 30px; border: 1px solid #979797;"></div>
                    <div style="width: 30px; border: 1px solid #979797;"></div>
                    <div style="width: 30px; border: 1px solid #979797;"></div>
                    <div style="width: 30px; border: 1px solid #979797;"></div>
                    <div style="width: 30px; border: 1px solid #979797;"></div>
                </div>
            </div>`;
        },
    };

    return (
        <>
            <Swiper
                pagination={pagination}
                loop={true}
                navigation={true}
                modules={[Navigation, Pagination]}
                className="home-page-carousel2 mySwiper"
            >
                {carouselList.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-full h-full p-4 lg:pt-[90px] flex flex-col sm:flex-row sm:items-center  sm:px-[50px] lg:px-[120px]">
                            <div className="sm:flex-[3] ">
                                <h1 className="text-[25px] font-semibold mb-[25px] text-center sm:text-left">{item.header}</h1>
                                <h1 className="text-center sm:text-left">{item.text}</h1>
                            </div>
                            <div className="mt-auto sm:self-end sm:flex-[4]">
                                <img className="w-full" src={item.img} alt="img" />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
