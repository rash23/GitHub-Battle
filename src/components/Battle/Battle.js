import {useState} from "react";
import {Link, useLocation} from "react-router-dom";
import PlayerInput from "./PlayerInput";
import PlayerPreview from "./PlayerPreview";


const Battle = () => {
    const [playerOneName, setPlayerOneName] = useState("")
    const [playerTwoName, setPlayerTwoName] = useState("")
    const [playerOneImage, setPlayerOneImage] = useState(null)
    const [playerTwoImage, setPlayerTwoImage] = useState(null)

    const location = useLocation()

    const handleSubmit = (id, username) => {
        if (id === "playerOne") {
            setPlayerOneName(username)
            setPlayerOneImage('https://github.com/' + username + '.png?size=200')
        }
        if (id === "playerTwo") {
            setPlayerTwoName(username)
            setPlayerTwoImage('https://github.com/' + username + '.png?size=200')
        }
    }

    const handleReset = (id) => {
        if (id === "playerOne") {
            setPlayerOneName("")
            setPlayerOneImage(null)
        }
        if (id === "playerTwo") {
            setPlayerTwoName("")
            setPlayerTwoImage(null)
        }
    }
    return (<div>
        <div className="row">
            {!playerOneName ? <PlayerInput
                    id="playerOne"
                    label="Player 1"
                    onSubmit={handleSubmit}/> :
                <PlayerPreview username={playerOneName} avatar={playerOneImage}>
                    <button className="reset" onClick={() => handleReset('playerOne')}>Reset</button>
                </PlayerPreview>}
            {!playerTwoName ? <PlayerInput
                    id="playerTwo"
                    label="Player 2"
                    onSubmit={handleSubmit}/> :
                <PlayerPreview username={playerTwoName} avatar={playerTwoImage}>
                    <button className="reset" onClick={() => handleReset('playerTwo')}>Reset</button>
                </PlayerPreview>}
        </div>
        {playerOneImage && playerTwoImage && <Link className="button" to={{
            pathname: location.pathname + "/results",
            search:`?playerOneName=${playerOneName}&playerTwoName=${playerTwoName}`
        }}>
            Battle
        </Link>}
    </div>)


}

export default Battle;
