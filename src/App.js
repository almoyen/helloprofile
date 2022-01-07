import "./App.css"
import DashboardSideNavClosed from "./pages/Dashboard/DashboardSideNavClosed";
import DashboardSideNavOpen from './pages/Dashboard/DashboardSideNavOpen';
import React from 'react'
import {useSelector} from 'react-redux'

export default function App() {
  const burgerMenuOpen = useSelector(state => state.burgerOpen);
  return (
    <div>
          {burgerMenuOpen ? 
          <DashboardSideNavOpen /> 
          :<DashboardSideNavClosed />}
      </div>
  )
}

