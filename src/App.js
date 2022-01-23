import "./App.css"
import "./styleguide.css"
import React from 'react' 
import {Routes, Route} from 'react-router-dom'

import ProfilePage from "./pages/ProfillePage/ProfilePage";

export default function App() {
  return (
          <Routes>
        <Route path="/kelvin" element={<ProfilePage/>} />
      </Routes>
  )
}

