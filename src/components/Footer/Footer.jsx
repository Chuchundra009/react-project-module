import './Footer.scss'
import { NavLink } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className='footer'>
            <nav className='footer__container'>
                <NavLink className='footer__btn' to='/ready'>Выученные</NavLink>
                <NavLink className='footer__btn' to='./card'>Карточки слов</NavLink>
                <NavLink className='footer__btn' to='./table'>Список слов</NavLink>
            </nav>
        </footer>
    )
}
