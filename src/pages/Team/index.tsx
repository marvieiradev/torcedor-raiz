import { useEffect, useState } from "react";
import { useParams } from "react-router";
import NextEvents from "../../components/NextEvents";
import React from "react";
import LastEvents from "../../components/LastEvents";
import Header from "../../components/Header";

const Team = () => {
  const [teamName, setTeamName] = useState("");
  const [teamBadge, setTeamBadge] = useState("");
  const [teamEquipment, setTeamEquipment] = useState("");
  const [teamColor1, setTeamColor1] = useState("");
  const [teamColor2, setTeamColor2] = useState("");
  const params = useParams();
  const id = params.id;
  const name = params.name;

  let url =
    "https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t=" + name;
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(url);
      result
        .json()
        .then((json) => {
          setTeamName(json.teams[0].strTeam);
          setTeamBadge(json.teams[0].strBadge);
          setTeamEquipment(json.teams[0].strEquipment);
          setTeamColor1(json.teams[0].strColour1);
          setTeamColor2(json.teams[0].strColour2);
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

  return (
    <div className="container">
      <div className="flex flex-col flex-1 min-h-screen items-center">
        <Header />
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
          {id && <NextEvents id={id} />}
          {id && <LastEvents id={id} />}
        </div>
      </div>
    </div>
  );
};

export default Team;
