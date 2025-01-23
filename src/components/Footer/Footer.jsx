import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // не забудьте подключить стили

import './Footer.scss';

const Footer = () => {
    useEffect(() => {
        // Инициализация AOS
        AOS.init({
            duration: 1000, // время анимации
            easing: 'ease-out-back', // плавность анимации
            once: true, // анимация будет происходить только один раз
        });
    }, []);

    return (
        <section className="footer">
            <div className="container">
                <div className="footer__wrap" data-aos="fade-up">
                    <img src="/logo.png" alt="" data-aos="fade-right" />
                    <div className="footer__menu" data-aos="fade-left">
                        <a href="">Популярные бренды</a>
                        <a href="/entrance">Вход</a>
                        <a href="/about-us">О нас</a>
                    </div>
                    <div className="footer__mail" data-aos="fade-up">
                        <div className="text text1" data-aos="zoom-in" data-aos-delay="200">
                            <img src="/call.png" alt="" />
                            <h3>8 800 600-61-91</h3>
                        </div>
                        <div className="text text2" data-aos="zoom-in" data-aos-delay="400">
                            <img src="/mail.png" alt="" />
                            <h3>Mr.Driskell@mail.ru</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
