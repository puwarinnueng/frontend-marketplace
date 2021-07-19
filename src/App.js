import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home';
import Employee from './pages/Employee'
import Topbar from './components/topbar';
import {
  // BrowserRouter as Router, 
  Route,
  Link
} from 'react-router-dom';
// import { Switch } from 'react-router-dom';
import N from './images/n.jpg'
class App extends Component {
  render() {
    return (

      <div className="my-app">
        <Topbar />
        <nav
          className="navbar is-light"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item" href="/">
                <img
                  src={N}
                  alt="NUENG LOGO"
                  width="112"
                  height="28"
                />
              </a>
            </div>
            <div className="navbar-menu">
              <div className="navbar-end">
                <Link to="/" className="navbar-item">
                  Home
                </Link>
                <Link to="/employee" className="navbar-item">
                  Employee
                </Link>
                <Link to="/projects" className="navbar-item">
                  Projects
                </Link>
                <Link to="/about" className="navbar-item">
                  About
                </Link>
                <a
                  className="navbar-item"
                  href="https://github.com/puwarinnueng"
                  target="_blank"
                >
                  github <i className="fab fa-github"></i>
                </a>

              </div>
            </div>
          </div>
        </nav>
        <div className="App container">
          <Route exact path="/" component={Home} />
          <Route exact path="/employee" component={Employee} />
        </div>
      </div>
    )
  }
}
export default App

// function App() {
//   return (
//     <Router>
//       <Topbar />

//       <div className="App">
//         <Navbar />

//         <Route exact path="/">
//           <Home />
//         </Route>

//         <Route exact path="/employee">
//           <Employee />
//         </Route>
//       </div>
//     </Router>

//   )
// }
// export default App;
