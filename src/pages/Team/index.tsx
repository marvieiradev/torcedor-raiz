import { useEffect, useState } from "react";
import { useParams } from "react-router";

const Team = () => {
  const [teamName, setTeamName] = useState("");
  const [teamBadge, setTeamBadge] = useState("");
  const [teamEquipment, setTeamEquipment] = useState("");
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
        })
        .catch((error) => console.log(error));
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col">
      <h1>{teamName}</h1>
      <div className="flex">
        <img src={teamBadge} className="w-[200px]" alt="" />
        <img src={teamEquipment} className="w-[200px]" alt="" />
      </div>
    </div>
  );
};

export default Team;
