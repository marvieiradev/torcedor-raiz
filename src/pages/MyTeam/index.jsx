import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { imageTeam } from "../../data/config";
import HeaderMyTeam from "../../components/HeaderMyTeam";
import NextEvents from "../../components/NextEvents";
import React from "react";
import LastEvents from "../../components/LastEvents";
import { findTeam } from "../../data/config";
import { Circle, Triangle } from "lucide-react";

const MyTeam = () => {
    const id = localStorage.getItem("teamId");
    const [myTeam, setMyTeam] = useState([]);
    const [lastResults, setLastResults] = useState([]);
    const [teamColor1, setTeamColor1] = useState("");
    const [teamColor2, setTeamColor2] = useState("");

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate("/");
    };

    if (!id) {
        handleNavigate();
    }

    useEffect(() => {
        const getMyTeam = async () => {
            const data = await fetch(findTeam + id);
            data.json().then((json) => {
                setMyTeam(json.team);
                setLastResults(json.pregameForm.form);
                setTeamColor1(json.team.teamColors.primary);
                setTeamColor2(json.team.teamColors.secondary);
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
                        <div className="mb-4 px-4 mx-4 text-white rounded-xl lg:grid lg:grid-2 mt-4 border-2" style={{ backgroundColor: teamColor1, color: teamColor2, borderColor: teamColor2 }}>
                            <div className="flex items-center justify-around p-2">
                                <img
                                    src={imageTeam + id + "/image"}
                                    alt=""
                                    className="w-[100px]"
                                />
                                <h1 className="text-2xl font-semibold text-center">{myTeam.name}</h1>
                            </div>
                        </div>

                        <div className="mb-4 bg-gray-800 px-4 mx-4 text-white rounded-xl lg:grid lg:grid-2">
                            <div className="flex gap-2 justify-center p-1">
                                <p className="text-lg font-semibold">Últimos Resultados</p>
                            </div>
                            <div className="flex justify-between bg-black px-4 py-4 items-center mb-2 w-[100%] rounded-xl">
                                {lastResults.map((item) =>
                                    item == "W" ? (
                                        <div className="flex flex-col justify-center items-center gap-1">
                                            <div className="text-green-500">
                                                <Triangle strokeWidth={3} />
                                            </div>
                                            <p className="text-xs">Vitória</p>
                                        </div>
                                    ) : item == "L" ? (
                                        <div className="flex flex-col justify-center items-center gap-1">
                                            <div className="text-red-500 rotate-180">
                                                <Triangle strokeWidth={3} />
                                            </div>
                                            <p className="text-xs">Derrota</p>
                                        </div>
                                    ) : (
                                        <div className="flex flex-col justify-center items-center gap-1">
                                            <div className="text-grey-500">
                                                <Circle strokeWidth={3} />
                                            </div>
                                            <p className="text-xs">Empate</p>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>

                        <p className="text-lg font-semibold text-center text-white mt-4 mb-4">
                            Próximos Jogos
                        </p>
                        {id && <NextEvents id={id} />}
                        <p className="text-lg font-semibold text-center text-white mt-4 mb-4">
                            Últimas Partidas
                        </p>
                        {id && <LastEvents id={id} />}
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyTeam;
