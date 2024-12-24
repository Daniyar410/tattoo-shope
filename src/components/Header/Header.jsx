import React, { useState } from 'react'
import './Header.scss'

const Header = () => {


    const [isActive, setIsActive] = useState(false)

    const tooggleBurger = () => {
        setIsActive(!isActive)
    }

    const closeBurger = () => {
        setIsActive(false)
    }


    return (
        <>
            <header className='header'>
                <div className="container">
                    <div className="wrap__header">
                        <h2>Каталог</h2>
                        <input type="text" placeholder='Поиск' />

                        <div className={`menu ${isActive ? 'active' : ''}`}>
                            <a href="">Промокоды</a>
                            <a href="">Скидки</a>
                            <a href="">Помощь</a>
                            <a href="">О нас</a>
                            <a href="">Контакты</a>
                        </div>

                        <div onClick={tooggleBurger} className={`burger ${isActive ? 'active' : ''}`}>
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