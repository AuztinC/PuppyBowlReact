import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import Players from './Players'
import Player from './Player'
import Form from './Form'

function App() {
  const [players, setPlayers] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const getPlayers = async() => {
      const data = await axios.get("https://fsa-puppy-bowl.herokuapp.com/api/2307-ftb-et-web-ft/players")
      setPlayers(data.data.data.players)
    }
    getPlayers()
    setLoading(false)
  }, [players])

  return (
    <>
    <header>
      <h1>Welcome to the Puppy Bowl!</h1>
      <Form setPlayers={setPlayers}/>
      <hr />
    </header>
      <Routes>
        <Route path='/' element={<Players players={players} loading={loading}/>}/>
        <Route path={`/:id`} element={<Player setLoading={setLoading} players={players} setPlayers={setPlayers} />} />
      </Routes>
    </>
  )
}

export default App
