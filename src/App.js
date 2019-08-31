import React from 'react';
import { BrowserRouter } from 'react-router-dom';


//components 
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
