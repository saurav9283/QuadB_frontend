import React, { useEffect } from 'react'
import Header from './Header'
import Row from './Row'
import getCryptoService from '../../services/crypto.services'

type CryptoData = {
    basic_unit: string;
    buy: number;
    last: number;
    name: string;
    sell: number;
    volume: number;
};

const Table = () => {
    const [cryptoData, setCryptoData] = React.useState<CryptoData[]>([]);
    
    useEffect(() => {
        getCryptoData()
    }, [])

    const getCryptoData= async ()=>{
        try{
            const res= await getCryptoService()
            console.log(res.data)
            setCryptoData(res.data)
        }
        catch(err){
            console.log("Error in fetching data",err)
        }
    }

  return (
    <div style={{padding:"0px 25px",borderBottom:"1px solid #2e3241",overflowX:"scroll"}}>
        <Header/>

        {
            cryptoData.map((item,index)=>{
                const buySellPrice=`${item.buy} / ${item.sell}`
                let difference= Math.round((item.sell-item.buy)/item.buy*100*100)/100
                if(isNaN(difference)){
                    difference=0
                }

                return(
                    <Row srNo={index+1} platform={item.name}
                    lastTradedPrice={item.last}
                    buySellPrice={buySellPrice}
                    difference={difference}
                    savings={item.sell-item.buy}   
                    />
                )
            })
        }


    </div>
  )
}

export default Table