import './CardText.scss'
import { useState } from 'react';
import data from '../../data.json';


export default function CardText({ english, transcription, russian }) {

    const [stText, setStText] = useState(true);

    // let cardText = data[1];

    function offSeeText() {
        setStText(false)
    }

    function onSeeText() {
        setStText(true)
    }


    return (
        <div className='scard'>
            <div className='scard__container'>
                <div className='scard__block'>
                    <h4 className='scard__block-word'>{english}</h4>
                    <p className='scard__block-transcr'>{transcription}</p>
                </div>
                <div className='scard__change'>
                    {stText ? (
                        <p className='scard__change-text' onClick={offSeeText}>Проверить</p>) : (
                        <p className='scard__change-translation' onClick={onSeeText}>{russian}</p>)}
                </div>
            </div>
        </div>
    )
}
