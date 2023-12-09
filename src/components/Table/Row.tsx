import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import btc from "../../assets/icons/btc.png"
// import {} from "../../assets/icons"
// import {} from "../../assets/icons"
type RowProps = {
  srNo: number;
  platform: string;
  lastTradedPrice: number;
  buySellPrice: string;
  difference: number;
  savings: number;

}
const Row = ({ srNo, platform, lastTradedPrice, buySellPrice, difference, savings }: RowProps) => {
  const loss = isNaN(difference) ? false : difference < 0
  return (
    <div style={{ display: "flex", color: "#fff", marginBottom: "20px", padding: "10px 0", backgroundColor: "#2e3241", fontSize: "24px", borderRadius: "10px", fontWeight: "400", minWidth: "700px" }}>
      <div style={{ width: "80px", textAlign: "start", paddingLeft:'20px' }}><span>{srNo}</span></div>
      <div style={{ width: "150px", textAlign: "center" }}>
        <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
          <img src={btc} style={{height:'25px', width:'25px', borderRadius:'50%'}} alt="" />
        <span>{platform}</span>
        </div>
      </div>
      <div style={{ flex: "1", textAlign: "center" }}><span>{lastTradedPrice}</span></div>
      <div style={{ flex: "1", textAlign: "center" }}><span style={{ fontSize: "20px" }}>{buySellPrice}</span></div>
      <div style={{ flex: "1", textAlign: "center", color: loss ? "red" : "#5dc7c2" }}><span>{difference} %</span></div>
      <div style={{ flex: "1", textAlign: "center", color: loss ? "red" : "#5dc7c2" }}>
        <div>
          {
            loss ? <ArrowDropDownIcon sx={{color:"red"}}/> : <ArrowDropUpIcon  sx={{color:"#5dc7c2"}}/>
          }

          <span>₹ {savings.toFixed(3)}</span>
        </div>
      </div>
    </div>
  )
}

export default Row