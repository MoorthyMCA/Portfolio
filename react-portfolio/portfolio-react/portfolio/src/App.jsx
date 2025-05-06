// import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Portfolio from './components/Portfolio'




const App = () => {


  return (
    <>


    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Portfolio/>}/>
      <Route path='/Skills' element={<Portfolio/>}/>
      <Route path='/Projects' element={<Portfolio/>}/>
    </Routes>
    
    
    </BrowserRouter>


   


    


 
  
    
    </>
  )
}

export default App
