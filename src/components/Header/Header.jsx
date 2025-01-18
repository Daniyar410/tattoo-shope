import React, { useState, useEffect } from 'react'
import './Header.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Header = () => {

    const [isActive, setIsActive] = useState(false)

    const tooggleBurger = () => {
        setIsActive(!isActive)
    }

    const closeBurger = () => {
        setIsActive(false)
    }

    // Инициализация AOS
    useEffect(() => {
        AOS.init({
            duration: 1000, // Длительность анимации
            easing: 'ease-out-back', // Плавность анимации
            once: true, // Анимация происходит только один раз
        })
    }, [])

    return (
        <>
            <header className='header'>
                <div className="container">
                    <div className="wrap__header">
                        <h2 data-aos="fade-down">Каталог</h2>

                        <div className={`menu ${isActive ? 'active' : ''}`} data-aos="fade-left" data-aos-delay="200">
                            <a href="">Популятрные бренды</a>
                            <a href="">Зарегистрироваться</a>
                            <a href="">О нас</a>
                            <a href="">Каталог</a>
                        </div>

                        <div onClick={tooggleBurger} className={`burger ${isActive ? 'active' : ''}`} data-aos="fade-right" data-aos-delay="400">
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
