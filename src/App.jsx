import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Body from '../components/body'
import TabComponent from '../components/tabcomponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Meet Our Distinguished Alumni</h1>
      <TabComponent />
    </div>
  )
}

export default App
