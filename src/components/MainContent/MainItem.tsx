import React from 'react'

type mainItemProps = {
    text: string;
    subText: string;
}
const MainItem = ({text,subText}:mainItemProps) => {
  return (
    <div style={{display:"flex",flexDirection:"column",gap:"2px",textAlign:"center",}}>
        <h1 style={{margin:"0",color:"#fff",fontSize:"60px",fontWeight:"400"}}>
            {text}
        </h1>
        <span style={{fontSize:"12px" , color:"gray"}}>
                {subText}
        </span>
    

    </div>
  )
}

export default MainItem