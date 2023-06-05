import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Counter from './Components/Counter'
import Footer from './Components/Footer'
import Earth from './Components/Earth'
import NewsItem from './Components/NewsItem'

  
const App = () => {
  return (
    <div>   
      <Navbar />     
        <Header />
        <Counter />
        <Earth /> 
        <NewsItem />         
        <Footer /> 
    </div>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
