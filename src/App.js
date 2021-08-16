import './App.css';
import Router from './router/Router';
import { AuthProvider } from './context/auth'

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
