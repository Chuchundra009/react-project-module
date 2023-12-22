import './SectionCard.scss';
import data from '../../data.json';
import { useState } from 'react';


export default function SectionCard() {
  // const [textInfo, setTextInfo] = useState(data);
  const [stText, setStText] = useState(true);
  // let cardText = data[Math.floor(Math.random()* data.length)];

  let cardText = data[1];

  function offSeeText() {
    setStText(false)
  }

  function onSeeText() {
    setStText(true)
  }

  return (
    <section className='scard'>
      <div className='scard__container'>
        <div className='scard__block'>
          <h4 className='scard__block-word'>{cardText.english}</h4>
          <p className='scard__block-transcr'>{cardText.transcription}</p>
        </div>
        <div className='scard__change'>
          {stText ? (
          <p className='scard__change-text' onClick={offSeeText}>Проверить</p>):(
            <p className='scard__change-translation' onClick={onSeeText}>{cardText.russian}</p>)}
        </div>

      </div>
    </section>
  )
}
