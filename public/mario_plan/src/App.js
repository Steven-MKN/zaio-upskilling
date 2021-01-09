import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'
import Navbar from './components/layout/Navbar'
import ProjectDetails from './components/projects/ProjectDetails'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import CreateProject from './components/projects/CreateProject'

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path={ process.env.PUBLIC_URL } component={ Dashboard } />
            <Route exact path={ process.env.PUBLIC_URL + '/dashboard' } component={ Dashboard } />
            <Route path={ process.env.PUBLIC_URL + '/project/:id' } component={ ProjectDetails } />
            <Route path={ process.env.PUBLIC_URL + '/signin' } component={ SignIn } />
            <Route path={ process.env.PUBLIC_URL + '/signup' } component={ SignUp } />
            <Route path={ process.env.PUBLIC_URL + '/create' } component={ CreateProject } />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
