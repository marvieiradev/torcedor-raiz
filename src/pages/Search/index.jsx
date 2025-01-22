import { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import leagues from '../../data/leagues.js';
import { listTeamsByLeague } from '../../data/config.js';
import HeaderCommon from '../../components/HeaderCommon.jsx';
import TeamFetch from '../../components/TeamFetch.jsx';

const Search = () => {
    const [teams, setTeams] = useState([])
    const [teamName, setTeamName] = useState(null)
    const params = useParams();
    const search = leagues.find((league) => {
        return league.id == params.id;
    });

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(listTeamsByLeague + search.name)
            result.json().then(json => {
                setTeams(json.teams)
            }).catch((error) => console.log(error));
        }
        fetchData();
    }, [])


    return (
        <div className="container">
            <div className="flex flex-col flex-1 min-h-screen items-center">
                <HeaderCommon fav="hidden" />
                <div className="flex flex-col justify-center w-full max-w-[1280px]">
                    <h1 className="text-xl lg:text-2xl text-center font-bold text-string mt-2 mb-4 lg:mb-6">
                        Escolha seu time
                    </h1>
                    <div className="grid grid-cols-2 gap-x-3 gap-y-3 xs:grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 lg:gap-5 px-4 mb-6 place-items-center">
                        {
                            teams.map((t) => (
                                <div
                                    key={t.strTeam}
                                    className="flex flex-col bg-primary border-2 border-bgprimary rounded-xl p-2 items-center gap-2 shadow-xs w-[167px] h-[200px] hover:shadow-lg cursor-pointer hover:scale-[103%]"
                                >
                                    <div onClick={() => setTeamName(t.strTeam)}>
                                        <img
                                            src={t.strBadge}
                                            alt={t.strTeam}
                                            loading="lazy"
                                            className="flex aspect-square h-[40%] w-[100%] justify-center rounded-lg object-contain"
                                        />
                                        <p className="uppercase line-clamp-2 h-9 overflow-hidden text-ellipsis text-xs md:text-sm lg:text-md text-center font-semibold text-string mt-2 mb-2 leading-2">
                                            {t.strTeam}
                                        </p>
                                        <div className="bg-gray-800 text-string text-center p-2 font-semibold rounded-xl w-full text-sm hover:scale-[103%]">
                                            SELECIONAR
                                        </div>
                                    </div>
                                </div>
                            )
                            )}
                    </div>
                </div>
            </div>
            {teamName && (<TeamFetch team={teamName} />)}
        </div>
    );
}

export default Search;