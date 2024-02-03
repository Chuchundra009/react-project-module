import './SectionListWords.scss'
import TableListWords from '../tableListWords/tableListWords'
import data from '../../data.json'
import { useState } from 'react'

export default function SectionListWords() {
  const [textWords, setTextWords] = useState(data);

  function delWords(id) {
    const favoritesWord = textWords.filter(item => item.id != id);
    setTextWords(favoritesWord);
  }

  function editRow(id, english, transcription, russian){
    const copyArr = textWords.map(item => {
      if(item.id === id){
        item.english= english;
        item.transcription = transcription;
        item.russian = russian;
        return item
      }
      return item
    })
    setTextWords(copyArr);
  }


  return (
    <section className='slistwords'>
      <table className='slistwords__table'>
        <thead>
          <tr className='slistwords__tr'>
            <th className='slistwords__tr-thtext'>Слово на английском</th>
            <th className='slistwords__tr-thtext'>Транскрипция</th>
            <th className='slistwords__tr-thtext'>Перевод</th>
            <th className='slistwords__tr-thtext'>Редактировать/Удалить</th>
          </tr>
        </thead>
        {textWords.map(item => (
          <TableListWords key={item.id} {...item} delWords={delWords} editRow={editRow} />
        ))}
      </table>
    </section>
  )
}
