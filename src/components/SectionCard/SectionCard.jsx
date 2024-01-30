import './SectionCard.scss';
import data from '../../data.json';
import { useEffect, useRef, useState } from 'react';
import CardText from '../CardText/CardText';


export default function SectionCard() {
  const [indexText, setIndexText] = useState(0);
  const [num, setNum] = useState([0]);

  const btnRef = useRef();

  useEffect(() =>{
    btnRef.current.focus();
  },[]);

  function prevCard() {
    setIndexText(indexText => ((indexText <= 0) ? (data.length - 1) : (indexText - 1)));
  }


  function nextCard() {
    setIndexText(indexText => ((indexText >= data.length - 1) ? 0 : (indexText + 1)));
  }

  function addNum(){
    const index = num.length- 1;
    setNum([...num, num[index]+1]);
  }

  return (
    <section className='card'>
      <div className='card__container'>
        <div className='card__btn'>
          <button className='card__btn-text' onClick={prevCard}>Prev</button>
        </div>
        <div>
          <CardText key={indexText} {...data[indexText]} addNum={addNum} ref={btnRef}/>
        </div>
        <div className='card__btn'>
          <button className='card__btn-text' onClick={nextCard}>Next</button>
        </div>

      </div >
      <div className='card__teach'>
        <p>Изучено слов за сегодня: {num.length-1}</p>
      </div>
    </section>
  )
}
