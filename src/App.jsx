import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home';
import Agentur from './pages/Agentur';
import Insights from './pages/Insights';
import Leistungen from './pages/Leistungen';
import InsightInner from './pages/InsightInner';
import News from './pages/News';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agentur" element={<Agentur />} />
        <Route path='/leistungen' element={<Leistungen/>}/>
         {/* insight page  */}
        <Route path='/insights' element={<Insights/>}/>
        <Route path='/insights/inner/:id' element={<InsightInner/>}/>
        {/* news pages  */}
        <Route path='/news' element={<News/>}/>

      </Routes>
      <Footer />
    </>
  )
}

export default App