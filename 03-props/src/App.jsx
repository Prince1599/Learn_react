import React from 'react'
import Card from './components/card'

const App = () => {
  return (
    
    <div className="parent">
      <Card user='Prince' age={22} img='https://plus.unsplash.com/premium_photo-1759672144486-79de6c2317cd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=600'/>
      <Card user='John' age={25} img='https://plus.unsplash.com/premium_photo-1759417292415-24251b02ddf7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170'/> 
    </div>
   
  )
}

export default App
