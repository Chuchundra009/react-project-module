import './SectionCard.scss';
import data from '../../data.json';
import { useState } from 'react';
import CardText from '../CardText/CardText';


export default function SectionCard() {
  const [indexText, setIndexText] = useState(0);

  function prevCard() {
    setIndexText(indexText => ((indexText <= 0) ? (data.length - 1) : (indexText - 1)));
  }


  function nextCard() {
    setIndexText(indexText => ((indexText >= data.length - 1) ? 0 : (indexText + 1)));
  }

  return (
    <section className='card'>
      <div className='card__container'>
        <div className='card__btn'>
          <button className='card__btn-text' onClick={prevCard}>Prev</button>
        </div>
        <div>
          <CardText {...data[indexText]} />
        </div>
        <div className='card__btn'>
          <button className='card__btn-text' onClick={nextCard}>Next</button>
        </div>

      </div>
    </section>
  )
}
