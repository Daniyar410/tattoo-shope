import React from 'react'
import './TabsProducts.scss'
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';



const TabsProducts = () => {
    return (
        <>
            <section className="tabs-section">
                <div className="container">
                    <Tabs>
                        {/* Список вкладок */}
                        <TabList>
                            <Tab>Хиты продаж</Tab>
                            <Tab>Самые популярные</Tab>
                            <Tab>Новые поступления</Tab>
                        </TabList>

                        {/* Контент вкладок */}
                        <TabPanel>

                        </TabPanel>
                        <TabPanel>

                        </TabPanel>
                        <TabPanel>
                            <div className="tads__wrap">
                                <div className="card">                               
                                    <img src="/product-tm1.png" alt="" />
                                    <div className="card__box">
                                    <p>Foxxx Kitsune Mini Black <br /> Vintage RCA </p>
                                    <b>650$</b>
                                    </div>
                                </div>
                                <div className="card">                               
                                    <img src="/product-gl1.png" alt="" />
                                    <div className="card__box">
                                    <p>Foxxx Kitsune Mini Black <br /> Vintage RCA </p>
                                    <b>650$</b>
                                    </div>
                                </div>
                                <div className="card">                               
                                    <img src="/product-tm1.png" alt="" />
                                    <div className="card__box">
                                    <p>Foxxx Kitsune Mini Black <br /> Vintage RCA </p>
                                    <b>650$</b>
                                    </div>
                                </div>
                                <div className="card">                               
                                    <img src="/product-tm1.png" alt="" />
                                    <div className="card__box">
                                    <p>Foxxx Kitsune Mini Black <br /> Vintage RCA </p>
                                    <b>650$</b>
                                    </div>
                                </div>
                                <div className="card">                               
                                    <img src="/product-tm1.png" alt="" />
                                    <div className="card__box">
                                    <p>Foxxx Kitsune Mini Black <br /> Vintage RCA </p>
                                    <b>650$</b>
                                    </div>
                                </div>
                                <div className="card">                               
                                    <img src="/product-tm1.png" alt="" />
                                    <div className="card__box">
                                    <p>Foxxx Kitsune Mini Black <br /> Vintage RCA </p>
                                    <b>650$</b>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </section>
        </>
    )
}

export default TabsProducts