import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { imageTeam } from "../../data/config";
import HeaderMyTeam from "../../components/HeaderMyTeam";
import NextEvents from "../../components/NextEvents";
import React from "react";
import LastEvents from "../../components/LastEvents";
import { findTeam } from "../../data/config";
import NextMatchInfo from "../../components/NextMatchInfo";

const MyTeam = () => {
    const team = JSON.parse(localStorage.getItem("team"));
    const [myTeam, setMyTeam] = useState([]);
    const [lastResults, setLastResults] = useState([]);
    const [teamColor1, setTeamColor1] = useState("");
    const [teamColor2, setTeamColor2] = useState("");
    const [teamName, setTeamName] = useState("");

    const navigate = useNavigate();
    useEffect(() => {
        if (!team) {
            navigate("/")
        }
        const getMyTeam = async () => {
            const data = await fetch(findTeam + team.id);
            data.json().then((json) => {
                setMyTeam(json.team);
                setLastResults(json.pregameForm.form);
                setTeamColor1(team.color1);
                setTeamColor2(team.color2);
                setTeamName(json.team.name)
            });
        };
        getMyTeam();
    }, []);

    return (
        <>
            <div className="container">
                <div className="flex flex-col flex-1 min-h-screen items-center">
                    <HeaderMyTeam />
                    <div className="flex flex-col justify-center w-full max-w-[1280px]">
                        <div className="flex flex-col lg:grid lg:grid-cols-2">
                            <div className="mb-4 px-4 mx-4 text-string rounded-xl lg:grid lg:grid-2 mt-4 border-2" style={{ backgroundColor: teamColor1, color: teamColor2, borderColor: teamColor2 }}>
                                <div className="flex items-center justify-around p-2">
                                    <img
                                        src={team.badge}
                                        alt={myTeam.name}
                                        className="w-[110px] lg:w-[125px]"
                                    />
                                    <h1 className="text-xl lg:text-2xl font-semibold text-center">{myTeam.name}</h1>
                                </div>
                            </div>
                            <div className="lg:mb-4 lg:mt-4">
                                <NextMatchInfo results={lastResults} name={teamName} />
                            </div>
                        </div>

                        <p className="text-lg font-semibold text-center text-string mt-4 mb-4">
                            Próximos Jogos
                        </p>
                        {team.id && <NextEvents id={team.id} />}
                        <p className="text-lg font-semibold text-center text-string mt-4 mb-4">
                            Últimas Partidas
                        </p>
                        {team.id && <LastEvents id={team.id} />}
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyTeam;
