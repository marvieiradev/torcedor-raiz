import { useEffect, useState } from "react";
import { useParams } from "react-router";
import NextEvents from "../../components/NextEvents";
import React from "react";
import LastEvents from "../../components/LastEvents";
import { searchTeams } from "../../data/config";
import HeaderCommon from "../../components/HeaderCommon";

const Team = () => {
  const [teamName, setTeamName] = useState("");
  const [teamBadge, setTeamBadge] = useState("");
  const [teamEquipment, setTeamEquipment] = useState("");
  const [teamShortName, setTeamShortName] = useState("");
  const [teamYear, setTeamYear] = useState("");
  const [teamStadium, setTeamStadium] = useState("");
  const [teamCountry, setTeamCountry] = useState("");
  const [teamLocation, setTeamLocation] = useState("");
  const [teamColor1, setTeamColor1] = useState("");
  const [teamColor2, setTeamColor2] = useState("");
  const [teamLogo, setTeamLogo] = useState("");
  const params = useParams();
  const id = params.id;
  const name = params.name;

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(searchTeams + name);
      result
        .json()
        .then((json) => {
          setTeamName(json.teams[0].strTeam);
          setTeamShortName(json.teams[0].strTeamShort);
          setTeamYear(json.teams[0].intFormedYear);
          setTeamStadium(json.teams[0].strStadium);
          setTeamCountry(json.teams[0].strCountry);
          setTeamBadge(json.teams[0].strBadge);
          setTeamEquipment(json.teams[0].strEquipment);
          setTeamColor1(json.teams[0].strColour1);
          setTeamColor2(json.teams[0].strColour2);
          setTeamLogo(json.teams[0].strLogo);
          setTeamLocation(json.teams[0].strLocation);
        })
        .catch((error) => console.log(error));
    };
    fetchData();
  }, []);

  if (!teamColor1) {
    setTeamColor1("#fff");
  }

  if (!teamColor2) {
    setTeamColor2("#000");
  }

  var team = { id: id, color1: teamColor1, color2: teamColor2 }

  return (
    <div className="container">
      <div className="flex flex-col flex-1 min-h-screen items-center">
        <HeaderCommon fav="" team={team} />
        <div className="flex flex-col justify-center w-full max-w-[1280px]">
          <div
            className="flex h-[50px] justify-center items-center"
            style={{ backgroundColor: teamColor1, color: teamColor2 }}
          >
            <h1 className="drop-shadow-lg text-center font-bold text-2xl">
              {teamName}
            </h1>
          </div>

          <div className="bg-team">
            <div className="flex m-auto items-center justify-between px-6 pb-2 pt-2 max-w-[800px]">
              <img src={teamBadge} className="w-[150px] p-1" alt="" />

              {teamEquipment ? (
                <div>
                  <img src={teamEquipment} className="w-[150px]" alt="" />
                </div>
              ) : (
                <div className="relative">
                  <img
                    className="absolute index-1 w-[22px] top-10 right-10"
                    src={teamBadge}
                    alt=""
                  />
                  <img src="/no-equip.png" className="w-[150px]" alt="" />
                </div>
              )}
            </div>
          </div>
          <p className="text-lg font-semibold text-center text-string mt-4 mb-2">
            Informações
          </p>
          <div className="text-string text-base py-2 px-4 flex flex-col justify-center md:flex-row md:justify-around mditems-center md:text-lg">
            <div>
              <p>{`Nome: ${teamName} ${teamShortName ? "(" + teamShortName + ")" : ""
                }`}</p>
              <p>{`Ano de Formação: ${teamYear ? teamYear : "Sem dados"}`}</p>
              <p>{`País: ${teamCountry ? teamCountry : "Sem dados"}`}</p>
              <p>{`Estádio: ${teamStadium ? teamStadium : "Sem dados"}`}</p>
              <p>{`Localização: ${teamLocation ? teamLocation : "Sem dados"
                }`}</p>
            </div>
            <div className="justify-center flex mt-2 md:mt-0">
              <img
                src={teamLogo}
                alt=""
                className="w-[250px] lg:w-[400px] justify-center"
              />
            </div>
          </div>
          <p className="text-lg font-semibold text-center text-string mt-4 mb-4">
            Próximos Jogos
          </p>
          {id && <NextEvents id={id} />}
          <p className="text-lg font-semibold text-center text-string mt-4 mb-4">
            Últimas Partidas
          </p>
          {id && <LastEvents id={id} />}
        </div>
      </div>
    </div>
  );
};

export default Team;
