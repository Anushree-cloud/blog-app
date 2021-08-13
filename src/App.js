import './App.css';
import Router from './router/Router';
import { useState } from 'react'

function App() {
  const [auth, setAuth] = useState({
    isLoggedin: false,
    user:{},
  })

  function login() {
    setAuth({ isLoggedin: true})
  }

  function logout() {
    setAuth({ isLoggedin: false})
  }
  console.log(auth);
  return (
    <div className="App">
        <Router auth={auth} login={login} logout={logout} />
    </div>
  );
}

export default App;
