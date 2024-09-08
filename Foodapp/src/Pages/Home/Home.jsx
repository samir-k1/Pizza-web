import React from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import Exploremenu from '../../Components/ExploreMenu/Exploremenu'
import { useState } from 'react'
const Home = () => {
  const [category, setCategory] = useState();

  return (
    <div>
      <Header/>
      <Exploremenu category={category} setCategory={setCategory}/>
    </div>
  )
}

export default Home
