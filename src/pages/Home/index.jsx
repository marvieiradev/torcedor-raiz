import leagues from "../../data/leagues.js";
import { Link } from "react-router-dom";

export function Home() {
    return (
        <>
            <h1>Home</h1>
            {leagues.map((league) => {
                return <div key={league.name}>
                    <Link to={`/search/${league.id}`}>
                        <p>{league.name}</p>
                    </Link>
                </div>
            })}
        </>
    );
}