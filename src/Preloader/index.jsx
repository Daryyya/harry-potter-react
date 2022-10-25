import React from 'react'
import style from './style.module.scss'

const Preloader = () => {
  return (
    <div className={style.lds_heart}><div></div></div>
  )
}

export default Preloader