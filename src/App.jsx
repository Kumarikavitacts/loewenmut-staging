import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home';
import Agentur from './pages/Agentur';
import Insights from './pages/Insights';
import Leistungen from './pages/Leistungen';
import InsightInner from './pages/InsightInner';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agentur" element={<Agentur />} />
        <Route path='/insights' element={<Insights/>}/>
        <Route path='/leistungen' element={<Leistungen/>}/>
        <Route path='/insights/inner/:id' element={<InsightInner/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App