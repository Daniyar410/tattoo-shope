import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './Footer.scss';

const Footer = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200, // Увеличил длительность анимации
            easing: 'ease-in-out', // Сделал анимацию более плавной
            once: true, // Анимация срабатывает только один раз
            delay: 100, // Добавил небольшую задержку
        });
    }, []);

    return (
        <section className="footer">
            <div className="container">
                <div className="footer__wrap" data-aos="fade-up">
                    <img src="/logo.png" alt="Logo" data-aos="flip-left" />

                    <div className="footer__menu" data-aos="fade-down">
                        <a href="/entrance" data-aos="slide-right">Вход</a>
                        <a href="/about-us" data-aos="slide-left">О нас</a>
                    </div>

                    <div className="footer__mail">
                        <div className="text text1" data-aos="fade-up">
                            <img src="/call.png" alt="Call Icon" data-aos="zoom-out" data-aos-delay="200" />
                            <h3 data-aos="flip-down">8 800 600-61-91</h3>
                        </div>
                        <div className="text text2" data-aos="fade-up">
                            <img src="/mail.png" alt="Mail Icon" data-aos="zoom-out" data-aos-delay="400" />
                            <h3 data-aos="flip-down">Mr.Driskell@mail.ru</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
