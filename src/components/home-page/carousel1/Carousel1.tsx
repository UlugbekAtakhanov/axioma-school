// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "./styles.css";

import ks from "../../../assets/carousel1/ks.jpg"
import autocad from "../../../assets/carousel1/autocad.jpg"
import backend from "../../../assets/carousel1/backend.jpg"
import foundation from "../../../assets/carousel1/foundation.jpg"
import frontend from "../../../assets/carousel1/frontend.jpg"
import prodesign from "../../../assets/carousel1/prodesign.jpg"
import python from "../../../assets/carousel1/python.jpg"
import { useTranslation } from "react-i18next";



// import required modules

export default function Carousel1() {
    const { t } = useTranslation()
    const carouselList = [
        { img: ks, title: t("home_page.carousel1.ks") },
        { img: autocad, title: t("home_page.carousel1.autocad") },
        { img: frontend, title: t("home_page.carousel1.frontend") },
        { img: foundation, title: t("home_page.carousel1.foundation") },
        { img: python, title: t("home_page.carousel1.python") },
        { img: backend, title: t("home_page.carousel1.backend") },
        { img: prodesign, title: t("home_page.carousel1.prodesign") },
        { img: ks, title: t("home_page.carousel1.ks") },
        { img: autocad, title: t("home_page.carousel1.autocad") },
        { img: frontend, title: t("home_page.carousel1.frontend") },
        { img: foundation, title: t("home_page.carousel1.foundation") },
        { img: python, title: t("home_page.carousel1.python") },
        { img: backend, title: t("home_page.carousel1.backend") },
        { img: prodesign, title: t("home_page.carousel1.prodesign") },
    ]

    return (
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                speed={1500}
                breakpoints={{
                    280: {
                        slidesPerView: 1.1,
                        spaceBetween: 1,
                    },
                    640: {
                        slidesPerView: 2.3,
                        spaceBetween: 1,
                    },
                    768: {
                        slidesPerView: 3.1,
                        spaceBetween: 1,
                    },
                    1024: {
                        slidesPerView: 4.1,
                        spaceBetween: 1,
                    },
                    1400: {
                        slidesPerView: 5.1,
                        spaceBetween: 1,
                    },
                }}
                modules={[Autoplay]}
                className="home-page-carousel1"
            >
                {carouselList.map((item, index) => (
                    <SwiperSlide key={index} className="relative">
                        <img src={item.img} alt="img" />
                        <p className="text-white bg-black/40 absolute inset-0 flex justify-center items-center text-[14px] leading-[21px]">{item.title}</p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
