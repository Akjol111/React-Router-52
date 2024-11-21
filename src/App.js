import { Route, Routes } from 'react-router-dom';
import './App.css';
import Kosmos from './components/Kosmos';
import Logo from './pages/Logo';
import Registr from './pages/Registr';
import Mac from './pages/Mac';

import Scripts from './pages/Scripts';
// import Js from './pages/Js';
import Vue from './pages/Vue';
import Kuznechik from './pages/Kuznechik';
import InfoHTML from './pages/InfoHTML';
import Css from './pages/Css';
import Java from './pages/Java';
import Shibui from './pages/Shibui';



function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Kosmos/>} >
            <Route index element={<Logo/>} />
            <Route path='input' element={<Registr/>} />
          </Route>
          <Route path='/2' element={<Mac/>} >
          <Route path='html' element={<InfoHTML/>} />
                <Route path='css' element={<Css/>} />
              <Route path='java' element={<Java/>}/>
          </Route>
          <Route path='/3' element={<Scripts/>}>
            <Route path='js' element={<Shibui/>}/>
            <Route path='react' element={<Kuznechik/>} />
            <Route path='vue' element={<Vue/>} />
          </Route>
          </Routes>
    </div>
  );
};

export default App;
