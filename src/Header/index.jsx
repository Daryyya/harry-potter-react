import React from 'react'
import style from './style.module.scss'

const Header = ({children}) => {
  return (
    <header className={style.header}>
        <div className={style.header__wrapper}>
            <h1 className={style.header__title} >Harry Potter</h1>
            <h2 className={style.header__subtitle} >View all characters from the Harry Potter universe</h2>
        </div>
        {children}
    </header>
  )
}

export default Header