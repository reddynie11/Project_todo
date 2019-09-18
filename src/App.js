import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


//components 
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/project/ProjectDetails';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/project/:id" component={ProjectDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
