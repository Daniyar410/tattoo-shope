import React from 'react'
import './Hero.scss'

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero__wrap">
            <div className="hero__box">
              <h1>Лучшие товары в мире татуировок</h1>
              <p>Оборудование и расходники для самых ярких и качественных работ</p>
              <button>Смотреть каталог</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero