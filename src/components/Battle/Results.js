import {useEffect, useState} from "react"
import {battle} from "../../utils/api";
import {useLocation} from "react-router-dom";
import PlayerPreview from "./PlayerPreview";
import Player from "./Player";
import {Link} from "react-router-dom";

const Results = () => {
    const [playerOneName, setPlayerOneName] = useState("")
    const [playerTwoName, setPlayerTwoName] = useState("")
    const [playerOneImage, setPlayerOneImage] = useState(null)
    const [playerTwoImage, setPlayerTwoImage] = useState(null)
    const [winnerScore, setWinnerScore] = useState(null)
    const [loserScore, setLoserScore] = useState(null)
    const [infoPlayerOne, setInfoPlayerOne] = useState(null)
    const [infoPlayerTwo, setInfoPlayerTwo] = useState(null)
    const [error, setError] = useState(null)

    const location = useLocation()
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search)

        battle([searchParams.get("playerOneName"), searchParams.get("playerTwoName")])
            .then(data => {

                if (!data) {
                    setError('Looks like these was an error. Check both users exist')
                }

                setPlayerOneName(data[0].profile.login)
                setPlayerOneImage(data[0].profile.avatar_url)
                setWinnerScore(data[0].score)
                setPlayerTwoName(data[1].profile.login)
                setPlayerTwoImage(data[1].profile.avatar_url)
                setLoserScore(data[1].score)
                setInfoPlayerOne(data[0].profile)
                setInfoPlayerTwo(data[1].profile)
                setError(null)
            })
    }, [location.search])


    return <>
        {error ? <div>
                <p>{error}</p>
                <Link className="reset" to='/battle'>Reset</Link>
            </div>
            : <div>
                <div className="row">
                    <PlayerPreview username={playerOneName} avatar={playerOneImage}>
                        <Player label='Winner'
                                score={winnerScore}
                                info={infoPlayerOne}/>
                    </PlayerPreview>
                    <PlayerPreview username={playerTwoName} avatar={playerTwoImage}>
                        <Player label='Loser'
                                score={loserScore}
                                info={infoPlayerTwo}/>
                    </PlayerPreview>

                </div>
                <Link className="reset" to='/battle'>Next game</Link>
            </div>}

    </>
}

export default Results