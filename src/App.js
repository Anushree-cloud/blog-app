import './App.css';
import Router from './router/Router';
import { useState } from 'react'

function App() {
  const [auth, setAuth] = useState({
    isLoggedin: false,
    user:{},
  })

  function login() {
    setAuth((previousProps) => {
      return({
        ...previousProps,
        isLoggedin: true
      })
    })
  }

  function logout() {
    setAuth((previousProps) => {
      return({
        ...previousProps,
        isLoggedin: false
      })
    })
  }
  console.log(auth);
  return (
    <div className="App">
        <Router auth={auth} login={login} logout={logout} />
    </div>
  );
}

export default App;
