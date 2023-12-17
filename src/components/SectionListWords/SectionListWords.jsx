import './SectionListWords.scss'
import TableListWords from '../tableListWords/tableListWords'
import data from '../../data.json'

export default function SectionListWords() {
  return (
    <section className='slistwords'>
      <table className='slistwords__table'>
        <tr className='slistwords__tr'>
          <th className='slistwords__tr-thtext'>Слово на английском</th>
          <th className='slistwords__tr-thtext'>Транскрипция</th>
          <th className='slistwords__tr-thtext'>Перевод</th>
          <th className='slistwords__tr-thtext'>Редактировать/Удалить</th>
        </tr>
        {data.map(item => (
        <TableListWords key={item.id} english={item.english} transcription={item.transcription} russian={item.russian}/>
        ))}
      </table>
    </section>
  )
}
