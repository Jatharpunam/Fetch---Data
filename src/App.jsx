import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Greet from './components/Greet';
import Dashboard from './Dashboard/Dashboard';
import Counter from './components/Counter';
import WelcomeGreetings from './components/DocumentTitle';

function App() {
  return (
    <div className="container py-4">
      <div className="text-center mb-4">
        <Greet />
        <WelcomeGreetings name="Punam Jathar" />
      </div>
      <div className="mb-4">
        <Counter />
      </div>
      <Dashboard />
    </div>
  );
}

export default App;
