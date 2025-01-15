import React, { useEffect, useState } from "react";
import { imageTeam } from "../data/config";

const LastEvents = ({ id }) => {
    const [lastEvents, setLastEvents] = useState([]);

    useEffect(() => {
        const getLastEvents = async () => {
            const schedule = await fetch(
                "https://api.sofascore.com/api/v1/team/" + id + "/events/last/0"
            );
            schedule.json().then((json) => {
                setLastEvents(json.events);
            });
        };
        getLastEvents();
    }, []);

    return (
        <>
            <div className="mb-2">
                <p className="text-lg font-semibold text-center text-white mt-4 mb-2">
                    Últimas Partidas
                </p>
            </div>
            <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3">
                {lastEvents.map(
                    (item, index) =>
                        index < 3 && (
                            <div
                                className="mb-4 bg-gray-800 px-4 mx-4 text-white rounded-xl"
                                key={index}
                            >
                                <div className="flex gap-2 justify-center p-1">
                                    <img
                                        src={
                                            "https://img.sofascore.com/api/v1/unique-tournament/" +
                                            item.tournament.uniqueTournament.id +
                                            "/image/dark"
                                        }
                                        alt=""
                                        className="h-[25px]"
                                    />
                                    <p>{item.tournament.name}</p>
                                </div>
                                <div className="flex justify-between bg-black p-2 font-semibold items-center mb-2 w-[100%] rounded-xl">
                                    <div className="flex flex-col w-[50%] px-2 gap-2 items-center">
                                        <img
                                            src={imageTeam + item.homeTeam.id + "/image"}
                                            alt=""
                                            className="h-[45px]"
                                        />
                                        <p className="truncate">{item.homeTeam.shortName}</p>
                                    </div>
                                    <div className="flex gap-6 justify-center items-center">
                                        <p className="text-center items-center text-yellow-500 text-3xl">{item.homeScore.display}</p>
                                        <p className="text-center items-center justify-center text-xl">X</p>
                                        <p className="text-center items-center text-yellow-500 text-3xl">{item.awayScore.display}</p>
                                    </div>
                                    <div className="flex flex-col w-[50%] px-2 gap-2 items-center">
                                        <img
                                            src={imageTeam + item.awayTeam.id + "/image"}
                                            alt=""
                                            className="h-[45px]"
                                        />
                                        <p className="truncate">{item.awayTeam.shortName}</p>
                                    </div>
                                </div>
                            </div>
                        )
                )}
            </div>
        </>
    );
}

export default LastEvents;