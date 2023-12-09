import React from 'react'
import Item from './Item'
import MainItem from './MainItem'

const MainContent = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap"}}>
        <Item text="0.1 %" subText="5 Mins"/>
        <Item text="0.96 %" subText="5 Mins"/>
        <MainItem text="₹ 39,02,826" subText="Average BTC/INR net price including commission"/>
        <Item text="2.73 %" subText="5 Mins"/>
        <Item text="7.51 %" subText="5 Mins"/>
    </div>
  )
}

export default MainContent