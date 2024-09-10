import React from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import Exploremenu from '../../Components/ExploreMenu/Exploremenu'
import { useState } from 'react'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'
const Home = () => {
  const [category, setCategory] = useState('All');

  return (
    <div>
      <Header/>
      <Exploremenu category={category} setCategory={setCategory}/>
      <FoodDisplay  category={category}/>
    </div>
  )
}

export default Home
