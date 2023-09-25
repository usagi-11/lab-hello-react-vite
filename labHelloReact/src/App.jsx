import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='top'>
    <img className='logo' src="src/assets/ironhack-logo-xs.png" alt="" />
    <img src="src/assets/menu-top-xs.png" alt="" />
    <h1>Say hello to ReactJS</h1>
    <p className='p1'>You will learn how to use <br /> the most popular frontend library, <br /> and become a super Ninja developer.</p>
    <button>Awesome!</button>
    </div>
    <div className='content'>
      <img src="src/assets/icon1.png" alt="" />
      <h3>Declarative</h3>
      <p>React makes it <br /> painless to create <br /> interactive UIs.</p>
      <img src="src/assets/icon2.png" alt="" />
      <h3>Components</h3>
      <p>Build encapsulated <br /> components that <br /> manage their state.</p>
      <img src="src/assets/icon3.png" alt="" />
      <h3>Single-Way</h3>
      <p>A set of immutable <br /> values are passed to <br /> the components.</p>
      <img src="src/assets/icon4.png" alt="" />
      <h3>JSX</h3>
      <p>Statically-typed, <br /> designed to run on <br /> modern browsers.</p>
    </div>
    </>
  )
}

export default App
