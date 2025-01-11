import { useEffect, useState } from "react";
import { useParams } from "react-router";

const Team = () => {
  const [teamName, setTeamName] = useState("");
  const [teamBadge, setTeamBadge] = useState("");
  const [teamEquipment, setTeamEquipment] = useState("");
  const [teamColor1, setTeamColor1] = useState("");
  const [teamColor2, setTeamColor2] = useState("");
  const params = useParams();
  const team = params.id;

  let url =
    "https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t=" + team;
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

  return (
    <div className="flex flex-col">
      <div
        className="flex h-[50px] justify-center items-center"
        style={{ backgroundColor: teamColor1, color: teamColor2 }}
      >
        <h1 className="drop-shadow-lg text-center font-bold text-2xl">
          {teamName}
        </h1>
      </div>
      <div className="flex justify-between px-6">
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
  );
};

export default Team;
