import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Player = ({ players, setPlayers, setLoading })=>{
    const id = useParams().id*1
    const player = players.find(player => player.id === id)
    async function handleDelete(){
        const result = await axios.delete(`https://fsa-puppy-bowl.herokuapp.com/api/2307-ftb-et-web-ft/players/${id}`)
        setLoading(true)
        setPlayers([])
        console.log(result)
    }
    if(!player){
        return <Link to={'/'}>Back to all players</Link>
    }
    return (<>
        <Link to={'/'}>Back to all players</Link>
        <div className="playerCont">
            <h3>{player.name}</h3>
            <p><b>Breed:</b> {player.breed}</p>
            <p><b>Player Status:</b> {player.status}</p>
            <Link to={'/'}><button className="deleteBtn" onClick={handleDelete}>Delete Player</button></Link>

        </div>
    </>)
}
export default Player