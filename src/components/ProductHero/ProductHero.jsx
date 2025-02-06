import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ProductHero.scss';

const ProductHero = ({ product }) => {
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const handleOrder = () => {
    const deliveryDays = Math.floor(Math.random() * 7) + 1;
    setMessage(`Заказ придет через ${deliveryDays} дней.`);
  };

  return (
    <section className="product" data-aos="fade-in">
      <div className="container">
        <div className="product__wrap" data-aos="zoom-in">
          <div className="product__img" data-aos="fade-right">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="product__box" data-aos="fade-left">
            <h3>{product.name}</h3>
            <b>{product.price}</b>

            <div className="product__form">
              <input
                type="text"
                placeholder="Введите адрес"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                data-aos="fade-up"
                data-aos-delay="200"
              />
              <input
                type="tel"
                placeholder="Введите номер телефона"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                data-aos="fade-up"
                data-aos-delay="400"
              />
              <button onClick={handleOrder} data-aos="flip-up" data-aos-delay="600">
                Заказать
              </button>
              {message && <p className="product__message">{message}</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
