import SectionAddWord from '../SectionAddWord/SectionAddWord'
import SectionListWords from '../SectionListWords/SectionListWords'
import './MainTable.scss'

export default function MainTable() {
  return (
    <main className='mainTable'>
      <div className='mainTable__container'>
        <SectionAddWord />
        <SectionListWords/>
      </div>
    </main>
  )
}
