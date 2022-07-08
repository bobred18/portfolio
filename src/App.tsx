import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Bar from './components/Bar';
import Contact from './components/Contact';
import CV from './components/CV';
import Home from './components/Home';
import Works from './components/Works';

function App() {

  const [step, setStep] = useState(0);

  /*
    Function condition() returns boolean value 
    
    1st expression:  
    window.scrollY - distance in pixels from the top of the html element
    
    2nd expression:  
    window.innerHeight * from, window.innerHeight * to - returns distances 
    from the top of element accordingly to 
    function arguments from and to which are numbers from 0 to 1. 
  */

  function condition(from: number, to: number) {
    let curb = 1;
    /* If site is in mobile increase compared value for better mobile experience */
    if (window.innerWidth < 500) {
      curb = 2.4;
    }
    return window.scrollY >= window.innerHeight * from * curb && window.scrollY < window.innerHeight * to * curb;
  }

  useEffect(() => {
    updateStep();
    window.addEventListener('scroll', updateStep);
  });

  /* Set step accordingly to value returned by condition */
  function updateStep() {
    console.log('updated step')
    if (condition(0, 0.25)) {
      setStep(0);
    }
    else if (condition(0.25, 0.6)) {
      setStep(1);
    }
    else if (condition(0.6, 0.9)) {
      setStep(2);
    }
    else if (condition(0.9, 1.3)) {
      setStep(3);
    }
  }

  return (
    <div className="app h-100 w-100">
      <BrowserRouter>
        {/* <DebugBox step={step} /> */}
        <Routes>
          <Route path='/cv' element={<CV />} />
          <Route path='/' element={<Main step={step} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Main(props: any) {
  const { step } = props;
  return <>
    <Bar />
    <Home step={step} />
    <About step={step} />
    <Works step={step} />
    <Contact step={step} />
  </>;
}

/* Useful to visually debug step value for parallax effect */
function DebugBox({ step }: any) {
  return <div style={{ position: 'fixed', color: 'white', textShadow: '0px 0px 5px black', fontSize: '30px', lineHeight: '1', fontWeight: '700', padding: '6px' }}>
    {step}
  </div>
}

export default App;