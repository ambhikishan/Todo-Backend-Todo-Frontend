import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todo, setTodo]= useState([{}]);

  useEffect( ()=>{var response = fetch("http://localhost:3000/").then(async function(response){
    var data = await response.json()
    
    setTodo(data)
  })
  
  

},[])
  
  
  return(
    <div>
      
      {todo.map((data)=><Todo title={data.title} description={data.description}></Todo>)}
    </div>
  )
}


function Todo({title , description}){
console.log("Todo called")

  return(
    <>
    <h1>{title}</h1>
    <h3>{description}</h3>
    <br></br>
    </>
  )
}


export default App
