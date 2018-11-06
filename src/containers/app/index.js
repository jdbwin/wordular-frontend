import React from 'react'
import { Route } from 'react-router-dom'

import Home from '../home'
import About from '../about'
import SideBar from '../../containers/SideBar'

const App = () => (
  <div className='columns'>
    <SideBar />
    <Route exact path="/" component={Home} />
    <Route exact path="/about-us" component={About} />
  </div>
)

export default App