import React from 'react'
import MainLayout from '../../components/MainLayout/MainLayout'
import './Items.css'
import ItemsCard from './ItemsCard'
const Items = () => {
  return (
    <div>
        <MainLayout>
        <div className="items__card_container">
            <ItemsCard/>
            <ItemsCard/>
            <ItemsCard/>
            <ItemsCard/>
            <ItemsCard/>
            <ItemsCard/>
        </div>
        </MainLayout>
    </div>
  )
}

export default Items