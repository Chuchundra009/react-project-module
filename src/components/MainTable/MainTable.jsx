import SectionAddWord from '../SectionAddWord/SectionAddWord'
import SectionListWords from '../SectionListWords/SectionListWords'
import SectionCard from '../SectionCard/SectionCard'
import './MainTable.scss'
// import data from '../../data.json';
// import { useState } from 'react';

export default function MainTable() {

  return (
    <main className='mainTable'>
      <div className='mainTable__container'>
        <SectionAddWord />
        <SectionListWords/>
        <SectionCard/>
      </div>
    </main>
  )
}
