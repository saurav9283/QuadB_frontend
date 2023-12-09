import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import MainContent from '../components/MainContent/MainContent'
import Table from '../components/Table/Table'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <div style={{textAlign:"center",padding:"10px 0px"}}>
            <span style={{fontSize:"24px" , color:"gray"}}>
            Best Price to Trade
            </span>
        </div>
        <MainContent/>
        <Table/>
        <Footer/>



    </div>
  )
}

export default Home