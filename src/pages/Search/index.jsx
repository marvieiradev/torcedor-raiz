import { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import leagues from '../../data/leagues.js';
const Search = () => {
    const [teams, setTeams] = useState([])
    const params = useParams();
    const search = leagues.find((league) => {
        return league.id == params.id;
    });

    let url = "https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=" + search.name

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(url)
            result.json().then(json => {
                setTeams(json.teams)
            }).catch((error) => console.log(error));
        }
        fetchData();
    }, [])


    return (
        <>
            {
                teams.map((t) => {
                    return <div key={t.strTeam}>
                        <h1>{t.strTeam}</h1>
                        <img src={t.strBadge} className="w-[200px]" alt="" />
                    </div>
                })
            }

        </>
    );
}

export default Search;