import axios from "axios"
import { useState } from "react"

const Form = ({ setPlayers })=> {
    const [name, setName] = useState("")
    const [breed, setBreed] = useState("")
    async function handleSubmit(event){
        event.preventDefault()
        setBreed("")
        setName("")
        const {data} = await axios.post("https://fsa-puppy-bowl.herokuapp.com/api/2307-ftb-et-web-ft/players", {name, breed})
        setPlayers(prev=>[...prev, data.data.newPlayer])
        console.log(data.data.newPlayer)
    }
    return (<>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="player">
                <input
                value={name}
                type="text"
                name="playerName"
                placeholder="Enter your player's name"
                onChange={(event)=>setName(event.target.value)}/>
            </label>
            <label htmlFor="breed">
                <input
                value={breed}
                type="text"
                name="playerName"
                placeholder="Enter your player's breed"
                onChange={(event)=>setBreed(event.target.value)}/>
            </label>
            <button>Submit</button>
        </form>
    </>)
}
export default Form