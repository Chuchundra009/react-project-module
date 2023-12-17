import './Header.scss'

export default function Header() {
  return (
    <header className="header">
      <div className='header__container'>
        <div className='header__logo'>
          Logo
        </div>
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
