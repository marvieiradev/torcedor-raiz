import { useEffect, useState } from "react";
import { findTeamByName } from "../data/config";
import { useNavigate } from "react-router";
import React from "react";

const TeamFetch = (team) => {
    const [teamId, setTeamId] = useState(null);
    let navigate = useNavigate();

    useEffect(() => {
        const getSchedule = async () => {
            const schedule = await fetch(findTeamByName + team.team);
            schedule
                .json()
                .then((json) => {
                    setTeamId(json.results[0].entity.id);
                })
                .catch((error) => console.log(error));
        };
        getSchedule();
    }, []);

    if (teamId !== null) {
        navigate("/team/" + teamId + "/" + team.team);
    }
    return <></>;
};

export default TeamFetch;
