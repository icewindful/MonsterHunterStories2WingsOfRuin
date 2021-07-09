import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import '../css/App2.css'

import Home from './Home';
import About from './About';
import Contact from './Contact';
/*
class App extends Component {
  render() {
    return (
    <Router>
        <title>Monster Hunter Stories2 Wings Of Ruin</title>
        <div>
          <h2>MonsterHunterStories2WingsOfRuin</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/contact' component={Contact} />
              <Route path='/about' component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}
*/

class App extends Component {
    render() {
      return (
      <Router>
          <div >
            <header className = "headerVar" >Monster Hunter Stories2 Wings Of Ruin 攻略</header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
           
            </nav>

            <section className="sectionVar">
              <ul className="navbar-nav mr-auto">
              <li><Link to={'/'} className="nav-link"> Home </Link></li>
              <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
              <li><Link to={'/about'} className="nav-link">About</Link></li>
            </ul>
            </section>

            <aside className="asideVar">
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/contact' component={Contact} />
                <Route path='/about' component={About} />
            </Switch>
            </aside>
          </div>
        </Router>
      );
    }
  }

export default App;