import React from 'react'
import './App.css'
import Header from './components/common/Header'
import DashBoard from './pages/DashBoard'
import { HashRouter, Route } from 'react-router-dom'

const App = () => {
  return (
  <HashRouter>
    <Header />
    <Route path="/" component={DashBoard} />
  </HashRouter>
  )
}

export default App
