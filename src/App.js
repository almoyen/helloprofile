import "./App.css"
import DashboardSideNavClosed from "./pages/Dashboard/DashboardSideNavClosed";

import DashboardSideNavOpen from './pages/Dashboard/DashboardSideNavOpen';
import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        navBarOpen: false
    };
  }

  openSideBar = () => {
    this.setState({navBarOpen: true})
  }

  closeSideBar = () => {
    this.setState({navBarOpen: false})
  }
  render() {
    return (
      <div>
          {this.state.navBarOpen ? 
          <DashboardSideNavOpen close = {this.closeSideBar}/> 
          :<DashboardSideNavClosed open = {this.openSideBar}/>}
      </div>
    )
  }
}

