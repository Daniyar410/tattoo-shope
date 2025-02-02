import React, { useEffect } from 'react'
import './Hero.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'

const Hero = () => {
  // Инициализируем AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Длительность анимации
      easing: 'ease-out-back', // Плавность анимации
      once: true, // Анимация будет происходить только один раз
    })
  }, [])

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero__wrap">
            <div className="hero__box" data-aos="fade-up">
              <h1 data-aos="fade-up">Лучшие товары в мире татуировок</h1>
              <p data-aos="fade-up" data-aos-delay="200">
                Оборудование и расходники для самых <br /> ярких и качественных работ
              </p>
              <Link to={'/about-us'}>
                <button data-aos="fade-up" data-aos-delay="400">
                  О нас
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
