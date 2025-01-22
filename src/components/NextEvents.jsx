import React, { useEffect, useState } from "react";
import { imageTeam, imageTournament, searchEvents } from "../data/config";

const NextEvents = ({ id, size, style }) => {
  const [nextEvents, setNextEvents] = useState([]);

  useEffect(() => {
    const getNextEvents = async () => {
      const schedule = await fetch(searchEvents + id + "/events/next/0");
      schedule.json().then((json) => {
        setNextEvents(json.events);
      });
    };
    getNextEvents();
  }, []);

  return (
    <>
      <div className={`flex flex-col ${style}`}>
        {nextEvents.map(
          (item, index) =>
            index < size && (
              <div
                className="mb-4 bg-card px-4 mx-4 text-string rounded-xl lg:grid lg:grid-2"
                key={index}
              >
                <div className="flex gap-2 justify-center p-1 mt-1 mb-1">
                  <img
                    src={imageTournament + item.tournament.uniqueTournament.id + "/image/dark"}
                    alt=""
                    className="h-[25px]"
                  />
                  <p className="font-semibold">{item.tournament.name}</p>
                </div>
                <div className="flex justify-between bg-black p-2 font-semibold text-xs lg:text-base items-center w-[100%] rounded-xl">
                  <div className="flex flex-col w-[50%] px-2 gap-2 items-center">
                    <img
                      src={imageTeam + item.homeTeam.id + "/image"}
                      alt=""
                      className="h-[45px]"
                    />
                    <p className="truncate">{item.homeTeam.shortName}</p>
                  </div>
                  <div className="flex">
                    <p className="text-center items-center justify-center text-xl">X</p>
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
                <p className="text-center text-sm">{`${new Date(item.startTimestamp * 1000).toLocaleDateString("pt-BR")} - ${new Date(item.startTimestamp * 1000).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}hs`} </p>
              </div>
            )
        )}
      </div>
    </>
  );
};

export default NextEvents;
