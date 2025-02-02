import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './TabsProducts.scss';
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Products from '/public/products.json';
import { Link } from 'react-router-dom';

const TabsProducts = () => {
    const [products, setProducts] = useState(Products?.tabs)

    function Popular() {
        setProducts(Products?.tabs?.slice(0, 6))
    }

    function News() {
        setProducts(Products?.tabs?.slice(6, 12))
    }



    useEffect(() => {
        // Initialize AOS
        AOS.init({
            duration: 1000, // animation duration
            easing: 'ease-out-back', // smooth animation
            once: true, // animation triggers only once
        });
    }, []);

    return (
        <section className="tabs-section">
            <div className="container">
                <Tabs>
                    {/* Tab titles */}
                    <TabList>
                        <Tab onClick={() => setProducts(Products?.tabs)}>All</Tab>
                        <Tab onClick={Popular}>Popular</Tab>
                        <Tab onClick={News}>New</Tab>
                    </TabList>

                    {/* Tab content */}
                    {Products.tabs.map((tabIndex) => (
                        <TabPanel key={tabIndex}>
                            <div className="tads__wrap">

                                {products.map((card, i) => (
                                    <Link className='link' to={`/single/${card.id}`} key={card.id || i}>
                                        <div
                                            className="card"
                                            data-aos="fade-up"
                                            data-aos-delay={i * 100}
                                        >
                                            <img src={card.image} alt={card.name} />
                                            <div className="card__box">
                                                <p>{card.name}</p>
                                                <b>{card.price}</b>
                                            </div>
                                        </div>
                                    </Link>
                                ))}



                            </div>
                        </TabPanel>
                    ))}
                </Tabs>
            </div>
        </section>
    );
};

export default TabsProducts;
