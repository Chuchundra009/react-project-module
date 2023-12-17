import './SectionAddWord.scss'

export default function SectionAddWord() {
  return (
    <section className='addWord'>
      <div className='addWord__title'>
        <h2 className='addWord__title-text'>Добавить новое слово</h2>
      </div>
      <div className='addWord__block'>
        <div>
          <input className='addWord__input-text' type="text" placeholder='english' />
        </div>
        <div>
          <input className='addWord__input-text' type="text" placeholder='transcription' />
        </div>
        <div><input className='addWord__input-text' type="text" placeholder='russian' /></div>
        <div>
          <button className='addWord__btn-text'>&#10004;</button>
        </div>
      </div>
    </section>
  )
}
