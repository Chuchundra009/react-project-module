import './SectionListWords.scss'
import TableListWords from '../tableListWords/tableListWords'

import { MyContext } from "../../Context/MyContext";
import { useContext } from "react";

export default function SectionListWords() {

  const {words, setWords} = useContext(MyContext);

  function delWords(id) {
    const favoritesWord = words.filter(item => item.id != id);
    setWords(favoritesWord);
  }

  function editRow(id, english, transcription, russian){
    const copyArr = words.map(item => {
      if(item.id === id){
        item.english= english;
        item.transcription = transcription;
        item.russian = russian;
        return item
      }
      return item
    })
    setWords(copyArr);
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
        {words.map(item => (
          <TableListWords key={item.id} {...item} delWords={delWords} editRow={editRow} />
        ))}
      </table>
    </section>
  )
}
