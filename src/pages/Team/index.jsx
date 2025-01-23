import { useEffect, useState } from "react";
import { useParams } from "react-router";
import NextEvents from "../../components/NextEvents";
import React from "react";
import LastEvents from "../../components/LastEvents";
import { searchTeams } from "../../data/config";
import HeaderCommon from "../../components/HeaderCommon";
import CardInfo from "../../components/CardInfo";
import { useNavigate } from "react-router";
import TeamInfo from "../../components/TeamInfo";
import { findTeamByName } from "../../data/config";

const Team = () => {
  const [teamId, setTeamId] = useState(null);
  const params = useParams();
  const id = params.id;
  const name = params.name;
  let navigate = useNavigate();

  useEffect(() => {
    const getSchedule = async () => {
      const schedule = await fetch(findTeamByName + name);
      schedule
        .json()
        .then((json) => {
          setTeamId(json.results[0].entity.id);
        })
        .catch((error) => console.log(error));
    };
    getSchedule();

  }, []);

  return (
    <div className="container">
      <div className="flex flex-col flex-1 min-h-screen items-center">
        <HeaderCommon fav="" team={teamId} />
        <div className="flex flex-col justify-center w-full max-w-[1280px]">

          <TeamInfo name={name} />

          <div className="flex flex-col md:flex-row justify-center mb-10">
            <div className="flex flex-col justify-center w-full">
              <p className="text-lg font-semibold text-center text-string mt-4 mb-4">
                Próximo Jogo
              </p>
              {teamId && <NextEvents id={teamId} size={1} style="" />}
            </div>
            <div className="flex flex-col justify-center w-full">
              <p className="text-lg font-semibold text-center text-string mt-4 mb-4">
                Última Partida
              </p>
              {teamId && <LastEvents id={teamId} size={1} style="" />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
