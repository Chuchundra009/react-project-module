import './TableListWords.scss'
import d from '../../assets/icons8-мусор.png'
import r from '../../assets/icons8-редактировать.png'

export default function TableListWords({ english, transcription, russian }) {
    return (
        <tr className='tlistwords'>
            <td className='tlistwords__list-text'>{english}</td>
            <td className='tlistwords__list-text'>{transcription}</td>
            <td className='tlistwords__list-text'>{russian}</td>
            <td className='tlistwords__list-btns'><button className='tlistwords__list-btnedit'><img className='tlistwords__list-img' src={r} alt="" /></button><button className='tlistwords__list-btndel'><img className='tlistwords__list-img' src={d} alt="" /></button></td>
        </tr>
    )
}
