import './App.css';
import Router from './router/Router';
import { useState } from 'react'
import { AuthProvider } from './Context/auth';

function App() {
  return (
    <AuthProvider>
      <div className="App">
          <Router/>
      </div>
    </AuthProvider>
  );
}

export default App;
