import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Home from './home'
import About from './about'
import Form from './form'
import './router.css'

export default function RouterExample () {
  return (
    <Router>
      <div>
        <div className='router'>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/form'>Form</Link>
            </li>

          </ul>
          <div className='clear' />
        </div>

        <hr />
        <div>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/form'>
              <Form />
            </Route>
          </Switch>
        </div>

      </div>
    </Router>
  )
}
