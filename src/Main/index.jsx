import React from 'react'
import style from './style.module.scss'

const Main = ({children}) => {
  return (
    <main className={style.container}>{children}</main>
  )
}

export default Main