import { React } from 'react';
import { ReactDOM } from 'react';
import './App.css';
import { Sidebar } from './components/Sidebar';
import { Contentwraper } from './components/Contentwraper';

function App() {
  return (
    <div id="wrapper">
      <Sidebar/>
      <Contentwraper/>
    
    </div>
  )
}

export default App;
