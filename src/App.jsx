import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Dashboard from './Dashboard'
import C from './C.JSX'  // by mistake this is the component name here compleletely C.JSX is treated here as a compponent 
import B from './B'
import A from './A'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="dash" element={<Dashboard/>}>
          <Route path="" element={<A/>}/>
          <Route path="b" element={<B/>}/>
          <Route path="c" element={<C/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
