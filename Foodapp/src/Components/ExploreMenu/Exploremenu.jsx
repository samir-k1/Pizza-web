import React from 'react'
import './Exploremenu.css'
import { menu_list } from '../../assets/assets'
const Exploremenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu '>
        <h1> explore menu </h1>
       <div className="Explore-list">
       {menu_list.map((item,index)=>{
      
      return(
        <div onClick={()=>setCategory(prev=>prev==item.menu_name?"All":item.menu_name)}key={index} className="menu-list">
            <img className={category===item.menu_name?"active":" "}src={item.menu_image} alt="" />
            <p> {item.menu_name}</p>
        </div>
      )

       })}
       </div>

      
    </div>
  )
}

export default Exploremenu
