import './Footer.scss'

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__container'>
                <div className='footer__btn'>
                    <button className='footer__btn-text'>Выученные</button>
                </div>
                <div className='footer__btn'>
                    <button className='footer__btn-text'>Карточки слов</button>
                </div>
                <div className='footer__btn'>
                    <button className='footer__btn-text'>Список слов</button>
                </div>
            </div>
        </footer>
    )
}
