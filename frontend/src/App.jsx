import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <Router>
      <Swithc>
        <Route path="/" excat componenet={Home} />
        <Route path="/login"  componenet={Login} />
        <Route path="/register"  componenet={Register} />
        <Route path="/about"  componenet={About} />
        <Route path="/contact"  componenet={Contact} />
      </Swithc>
    </Router>
  )
}

export default App
