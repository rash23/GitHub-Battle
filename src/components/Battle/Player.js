import Loader from "../General/Loader";

const Player = (props) => {
    return props.info ? <div>
        <ul className='space-list-items'>
            {props.info.name && <li>{props.info.name}</li>}
            {props.info.location && <li>{props.info.location}</li>}
            {props.info.company && <li>{props.info.company}</li>}
            <li>Followers: {props.info.followers}</li>
            <li>Following: {props.info.following}</li>
            <li>Public Repos: {props.info.public_repos}</li>
            {props.info.blog && <li><a href={props.info.blog}>{props.info.blog}</a></li>}
        </ul>

        <h1 className={props.label === "Winner" ? "winner" : "loser"}>{props.label}</h1>
        <h3 className='score'>Score: {props.score}</h3>
    </div> : <Loader/>
}

export default Player