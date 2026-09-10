import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home';
import Agentur from './pages/Agentur';
import Insights from './pages/Insights';
import Leistungen from './pages/Leistungen';
import LeistungenDetail from './pages/LiestungenDetail';
import Team from './pages/Team';
import InsightInner from './pages/InsightInner';
import News from './pages/News';
import NewsInner from './pages/NewsInner';
import Kontakt from './pages/Kontakt';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agentur" element={<Agentur />} />
        <Route path='/leistungen' element={<Leistungen/>}/>
        <Route path='/leistungen/:id' element={<LeistungenDetail />} />
        <Route path='/team' element={<Team />} />
      
         {/* insight page  */}
        <Route path='/insights' element={<Insights/>}/>
        <Route path='/insights/:id' element={<InsightInner/>}/>
        {/* news pages  */}
        <Route path='/news' element={<News/>}/>
        <Route path='/news/:id' element={<NewsInner/>}/>
        <Route path='/kontakt' element={<Kontakt/>}/>
        <Route path='/impressum' element={<Impressum/>}/>
        <Route path='/datenschtuz' element={<Datenschutz/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App