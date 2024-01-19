import './Header.scss'
import logo from '../../assets/logo.jpg'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="header">
      <div className='header__container'>
        <NavLink to='/' className='header__logo'>
          <img src={logo} alt="logo" className='header__logo-img' />
        </NavLink>
        {/* <nav className="header__nav">
          <a href="#">text</a>
          <a href="#">text</a>
        </nav> */}
        <div className='header__btn'>
          <button className='header__btn-text'>Войти</button>
        </div>
      </div>
    </header>
  )
}
