import { Link } from "react-router-dom"

const Players = ({ players, loading })=>{
    return <>
    { loading ? <h1>Loading...</h1> :
      <ul>
        { players.map((player) => {{
          return (
            <div className='puppyCont'key={player.id}>
              <Link to={`/${player.id}`} >{player.name}</Link>
            </div>
          )
        }})}
      </ul>
    }
    </>
  }
export default Players