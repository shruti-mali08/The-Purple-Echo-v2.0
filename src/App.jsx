import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import './App.css';

import NavBar from './componenets/NavBar/NavBar.jsx';
import SpaceBackground from './componenets/SpaceBackground/SpaceBackground.jsx';
import Home from './pages/01Home/Home.jsx';
import TheLegacy from './pages/02TheLegacy/TheLegacy.jsx';

import BTS2point0 from './pages/03BTS2-0/BTS2point0.jsx';
import Arirang from './pages/03BTS2-0/i-Arirang.jsx';

import SoloWorks from './pages/04SoloEras/04SoloWorks.jsx';
import RM from './pages/04SoloEras/i-RM.jsx';
import Jin from './pages/04SoloEras/ii-Jin.jsx';
import SUGA from './pages/04SoloEras/iii-SUGA.jsx';
import JHope from './pages/04SoloEras/iv-Jhope.jsx';
import Jimin from './pages/04SoloEras/v-Jimin.jsx';
import V from './pages/04SoloEras/vi-V.jsx';
import Jungkook from './pages/04SoloEras/vii-Jungkook.jsx';

import GlobalImpact from './pages/05GlobalImpact/GlobalImpact.jsx';

import CreditsAndDisclaimer from './pages/Footer/CreditsAndDisclaimer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <SpaceBackground className='spaceBackgroundClass'>
          <div className="app-layout-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <h1>The Purple Echo</h1>
          </Link>

          <NavBar />

          <Routes>
            <Route path="/" element={<Home />} />

            <Route path='/the-legacy' element={<TheLegacy />} />

            <Route path='/bts-2point0' element={<BTS2point0 />} />
            <Route path='/bts-2point0/arirang' element={<Arirang />} />

            <Route path='/solo-works' element={<SoloWorks />} />
            <Route path='/solo-works/rm' element={<RM />} />
            <Route path='/solo-works/jin' element={<Jin />} />
            <Route path='/solo-works/suga' element={<SUGA />} />
            <Route path='/solo-works/j-hope' element={<JHope />} />
            <Route path='/solo-works/jimin' element={<Jimin />} />
            <Route path='/solo-works/v' element={<V />} />
            <Route path='/solo-works/jungkook' element={<Jungkook />} />

            <Route path='/global-impact' element={<GlobalImpact />} />

            <Route path='/credits-and-disclaimer' element={<CreditsAndDisclaimer />} />

          </Routes>

          <footer className='footer'>
            <div className='footerContent'>
            <hr></hr>
            <div className='footerText'>
              <Link to="/credits-and-disclaimer">Credits & Disclaimer</Link>
            </div>
            </div>
          </footer>
          </div>
        </SpaceBackground>
      </BrowserRouter>
    </>
  )
}

export default App;
