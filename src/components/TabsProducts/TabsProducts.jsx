import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './TabsProducts.scss';
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const TabsProducts = () => {
    useEffect(() => {
        // Инициализация AOS
        AOS.init({
            duration: 1000, // время анимации
            easing: 'ease-out-back', // плавность анимации
            once: true, // анимация будет происходить только один раз
        });
    }, []);

    return (
        <section className="tabs-section">
            <div className="container">
                <Tabs>
                    {/* Список вкладок */}
                    <TabList>
                        <Tab>Самые популярные</Tab>
                        <Tab>Новые поступления</Tab>
                    </TabList>

                    {/* Контент вкладок */}
                    <TabPanel>
                        <div className="tads__wrap">
                            <div className="card" data-aos="fade-up">
                                <img src="/product-gl1.png" alt="" />
                                <div className="card__box">
                                    <p>Нитровиниловые перчатки <br /> Wally Plastic S</p>
                                    <b>1$</b>
                                </div>
                            </div>
                            <div className="card" data-aos="fade-up" data-aos-delay="100">
                                <img src="/product-fc1.png" alt="" />
                                <div className="card__box">
                                    <p>Forever Cartridge Grip Ergo <br /> 30 мм Огненно-Рыжий</p>
                                    <b>800$</b>
                                </div>
                            </div>
                            <div className="card" data-aos="fade-up" data-aos-delay="200">
                                <img src="/product-tp1.png" alt="" />
                                <div className="card__box">
                                    <p>CNC X-WE Wireless <br /> Tattoo Pen</p>
                                    <b>400$</b>
                                </div>
                            </div>
                            <div className="card" data-aos="fade-up" data-aos-delay="300">
                                <img src="/product-tp2.png" alt="" />
                                <div className="card__box">
                                    <p>MT Vader Pen MT RCA Cord <br /> PRO 2000.135</p>
                                    <b>600$</b>
                                </div>
                            </div>
                            <div className="card" data-aos="fade-up" data-aos-delay="400">
                                <img src="/product-tm7.png" alt="" />
                                <div className="card__box">
                                    <p>Verge Direct 2.1 <br /> Black</p>
                                    <b>750$</b>
                                </div>
                            </div>
                            <div className="card" data-aos="fade-up" data-aos-delay="500">
                                <img src="/product-tm8.png" alt="" />
                                <div className="card__box">
                                    <p>Foxxx Kitsune Mini Vintage <br /> Aging With Gold RCA</p>
                                    <b>450$</b>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="tads__wrap">
                            <div className="card" data-aos="fade-up">
                                <img src="/product-tm1.png" alt="" />
                                <div className="card__box">
                                    <p>Foxxx Kitsune Mini Black <br /> Vintage RCA </p>
                                    <b>650$</b>
                                </div>
                            </div>
                            <div className="card" data-aos="fade-up" data-aos-delay="100">
                                <img src="/product-tm2.png" alt="" />
                                <div className="card__box">
                                    <p>Foxxx Viper Fox Golden <br /> Vintage Lot #1 RCA</p>
                                    <b>800$</b>
                                </div>
                            </div>
                            <div className="card" data-aos="fade-up" data-aos-delay="200">
                                <img src="/product-tm3.png" alt="" />
                                <div className="card__box">
                                    <p>Cyborg Machines Alter Rotary <br /> Axis Cross Sexy Nymph </p>
                                    <b>700$</b>
                                </div>
                            </div>
                            <div className="card" data-aos="fade-up" data-aos-delay="300">
                                <img src="/product-tm4.png" alt="" />
                                <div className="card__box">
                                    <p>Deuce Machines Direct Drive <br /> #7 RCA Samurai</p>
                                    <b>700$</b>
                                </div>
                            </div>
                            <div className="card" data-aos="fade-up" data-aos-delay="400">
                                <img src="/product-tm5.png" alt="" />
                                <div className="card__box">
                                    <p>Verge Direct 2.1 Pink gip EGO <br /> 4 mm liners</p>
                                    <b>750$</b>
                                </div>
                            </div>
                            <div className="card" data-aos="fade-up" data-aos-delay="500">
                                <img src="/product-tm6.png" alt="" />
                                <div className="card__box">
                                    <p>Verge Direct 2.1 <br /> Gunmetal</p>
                                    <b>650$</b>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </section>
    );
};

export default TabsProducts;
