import SectionAddWord from '../SectionAddWord/SectionAddWord'
import SectionListWords from '../SectionListWords/SectionListWords'
import SectionCard from '../SectionCard/SectionCard'
import './MainTable.scss'

export default function MainTable() {

  return (
    <main className='mainTable'>
      <div className='mainTable__container'>
        <SectionAddWord />
        <SectionListWords/>
        {/* <SectionCard/> */}
      </div>
    </main>
  )
}
