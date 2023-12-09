import React from 'react'

const Header = () => {
  return (
    <div style={{display:"flex",color:"#818389",margin:"50px 0px 20px 0px",fontSize:"24px",fontWeight:"bold",minWidth:"700px"}}>
        <div style={{ width: "60px", textAlign: "start", paddingLeft:'20px' }}>#</div>
        <div style={{width:"150px",textAlign:"center"}}>Platform</div>
        <div style={{flex:"1",textAlign:"center"}}>Last Traded Price</div>
        <div style={{flex:"1",textAlign:"center"}}>Buy / Sell Price</div>
        <div style={{flex:"1",textAlign:"center"}}>Difference</div>
        <div style={{flex:"1",textAlign:"center"}}>Savings</div>
    </div>
  )
}

export default Header