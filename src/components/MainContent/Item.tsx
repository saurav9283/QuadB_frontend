import React from 'react'

type ItemProps = {
    text: string;
    subText: string;
}
const Item = ({text,subText}:ItemProps) => {
  return (
    <div style={{display:"flex",flexDirection:"column",gap:"2px",textAlign:"center",width:"150px"}}>
        <h1 style={{margin:"0",color:"#5dc7c2",fontSize:"40px",fontWeight:"400"}}>
            {text}
        </h1>
        <span style={{fontSize:"20px" , color:"gray"}}>
                {subText}
        </span>
    

    </div>
  )
}

export default Item