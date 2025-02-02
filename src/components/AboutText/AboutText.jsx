import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './AboutText.scss';

const AboutText = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section className="about-us">
            <div className="container">
                <div className="about__wrap">
                    <img src="/pepol.png" alt="" data-aos="fade-right" />

                    <div className="about__text" data-aos="fade-left">
                        <h3>Тату магазин Mr. Driskell</h3>
                        <p data-aos="fade-up">
                            Приветствуем вас в Tattoo Mall — в нашем тату магазине собираются энтузиасты индустрии, профессиональные мастера и новички, которые только делают первые шаги в тату искусстве. Мы знаем, насколько важно грамотно и точно подобрать инструменты для продуктивных тату сеансов, и помогаем быстро найти то, что поможет их сделать именно такими.
                        </p>
                        <p data-aos="fade-up" data-aos-delay="200">
                            В нашем ассортименте не просто тату оборудование, это буквально целая команда из грамотных и действительно эффективных помощников на вашем рабочем столе. Пройдя этап долгих разработок и бесчисленных тестов под пристальным взглядом отечественных машиностроителей, космецевтов и брендов с мировым именем, эти товары нарабатывали опыт и каждый день становились лучше, чтобы показать, на что они способны, и помочь раскрыть ваш потенциал.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutText;
