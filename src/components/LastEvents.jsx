import React, { useEffect, useState } from "react";
import { imageTeam, imageTournament, searchEvents } from "../data/config";

const LastEvents = ({ id, size, style }) => {
    const [lastEvents, setLastEvents] = useState([]);

    useEffect(() => {
        const getLastEvents = async () => {
            const schedule = await fetch(searchEvents + id + "/events/last/0");
            schedule.json().then((json) => {
                setLastEvents(json.events.reverse());
            });
        };
        getLastEvents();
    }, []);

    return (
        <>
            <div className={`flex flex-col ${style}`}>
                {lastEvents.map(
                    (item, index) =>
                        index < size && (
                            <div
                                className="mb-4 bg-card px-4 mx-4 text-string rounded-xl"
                                key={index}
                            >
                                <div className="flex gap-2 justify-center p-1">
                                    <img
                                        src={imageTournament + item.tournament.uniqueTournament.id + "/image/dark"}
                                        alt=""
                                        className="h-[25px]"
                                    />
                                    <p>{item.tournament.name}</p>
                                </div>
                                <div className="flex justify-between bg-black p-2 font-semibold text-xs lg:text-base items-center mb-2 w-[100%] rounded-xl">
                                    <div className="flex flex-col w-[50%] px-2 gap-2 items-center">
                                        <img
                                            src={imageTeam + item.homeTeam.id + "/image"}
                                            alt=""
                                            className="h-[45px]"
                                        />
                                        <p className="truncate">{item.homeTeam.shortName}</p>
                                    </div>
                                    <div className="flex gap-6 justify-center items-center">
                                        <p className="text-center items-center text-string_accent text-2xl">{item.homeScore.display}</p>
                                        <p className="text-center items-center justify-center text-xl">X</p>
                                        <p className="text-center items-center text-string_accent text-2xl">{item.awayScore.display}</p>
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