import './App.css';
import Router from './route/Router';

/* src
..../components
........Navbar.js
..../pages
.........../Blog
.................Add.js
.................List.js
.........../Home
...............index.js
....App.js -- Routes tumi ekhanei add korte paro */

function App() {
  const blog = [
    {
      name: 'abc',
      id: 1,
      details: 'abcd',
    },
    {
      name: 'mno',
      id: 2,
      details: 'mnop',
    },
    {
      name: 'xyz',
      id: 3,
      details: 'wxyz',
    },
  ]
  return (
    <div className="App">
        <Router blog={blog} />
    </div>
  );
}

export default App;
