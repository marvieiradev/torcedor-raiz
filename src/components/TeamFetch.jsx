import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import React from "react";

const TeamFetch = (team) => {
    const [teamId, setTeamId] = useState(null);
    let navigate = useNavigate();

    useEffect(() => {
        const getSchedule = async () => {
            const schedule = await fetch(
                "https://api.sofascore.com/api/v1/search/all?q=" + team.team
            );
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
        navigate("/team/" + teamId + "/" + team.team)
    }
    return (
        <>
        </>
    );
}

export default TeamFetch;