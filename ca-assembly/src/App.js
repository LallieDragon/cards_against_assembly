import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './App.css';
import CardList from './components/CardList';
import AddNewCard from './components/AddNewCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <header>
              <h1>Cards <br /> Against <br /> Assembly</h1>
            </header>
            <nav>
              <NavLink activeClassName='active' className='navlink' exact to='/'>Home</NavLink>
              <NavLink activeClassName='active' className='navlink' to='/add'>Add a New Card</NavLink>
              <NavLink activeClassName='active' className='navlink' to='/about'>About</NavLink>
            </nav>
            <Switch>
              <Route exact path='/' component={CardList} />
              <Route path='/add' component={AddNewCard} />
              <Route path='/about' />
            </Switch>
          <footer>Made with &#128125;</footer>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
