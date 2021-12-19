import React, {useState} from 'react'
import './App.css'
import axios from 'axios'
import { SearchForm } from './components/SearchForm'
import {Profile} from './components/Profile'


function App(){
  const [userFound, setUserFound]= useState({})
  const [userSearch, setUserSearch]= useState('')
    const [isOpen, setIsOpen]= useState(false)

  const fetchUser=  async (query: string): Promise<any> =>{
    let ghAPI= `https://api.github.com/users/${query}`
    axios.get(ghAPI)
    .then(res=>{
      let result= res.data  
      setUserFound(result)
      setIsOpen(true)
    }).catch((err)=>{
      window.alert("No match found")
      setIsOpen(false)
      setUserSearch('')
    })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form= event.target as HTMLFormElement
    const input = form.querySelector("#userText") as HTMLInputElement;
    setUserSearch(input.value)
    fetchUser(input.value)
  }

  const showProfile=()=>{
    return (<Profile user={userFound}></Profile>)
  }


  return (
    <div className="app-container">
      <header className="header-container">
        <h1 className="header-title">Find Github User</h1>
        <div>
          <SearchForm handleSubmit={(event) => handleSubmit(event)} />
        </div>
      </header>
      {isOpen && showProfile()}
    </div>
  );

}
export default App
