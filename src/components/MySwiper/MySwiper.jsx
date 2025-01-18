import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./MySwiper.scss";

const MySwiper = () => {
    const slides = [
        { id: 1, img: "/tattoo-revive.png" },
        { id: 2, img: "/tattoo-face.png" },
        { id: 3, img: "/tattoo-dermalize.png" },
        { id: 4, img: "/tattoo-kwadron.png" },
        { id: 5, img: "/tattoo-aloe.png" },
        { id: 6, img: "/tattoo-cheyenne.png" },
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSlideChange = (swiper) => {
        setCurrentIndex(swiper.realIndex);
    };

    return (
        <div className="swiper-container">
            <Swiper
                onSlideChange={handleSlideChange}
                slidesPerView={1}
                spaceBetween={30}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id} className="slide">
                        <img src={slide.img} alt={slide.text} className="slide-img" />
                        <p className="slide-text">{slide.text}</p>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="progress">
                Осталось: {slides.length - currentIndex - 1} слайдов
            </div>
        </div>
    );
};

export default MySwiper;
