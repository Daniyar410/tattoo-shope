import React, { useState, useEffect } from 'react'
import './Header.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'

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
                        <Link to={'/'}>
                        <h1 data-aos="fade-down">Главное</h1>
                        </Link>

                        <div className={`menu ${isActive ? 'active' : ''}`} data-aos="fade-left" data-aos-delay="200">
                            <a href="/entrance">Вход</a>
                            <a href="/about-us">О нас</a>
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
