import React from 'react'
import { Link } from 'react-router-dom'
import style from '../../common.module.scss'

function Nav() {
  return (
    <div className={style.nav}>
        <div>logo</div>
        <div>
            <ul>
                <li><Link to='/'>Home</Link> </li>
                <li><Link to='about'>About</Link> </li>
                <li><Link to='portfolio'>Portfolio</Link></li>
                <li>Offer</li>
            </ul>
        </div>
        <div>Contact</div>
    </div>
  )
}

export default Nav