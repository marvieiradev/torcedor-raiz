import { useEffect, useState } from "react";
import { redirect, useParams } from "react-router";
import { useNavigate } from "react-router";
import React from "react";

const Load = () => {
    const [teamId, setTeamId] = useState(null);
    const params = useParams();
    let navigate = useNavigate();
    const team = params.id;

    useEffect(() => {
        const getSchedule = async () => {
            const schedule = await fetch(
                "https://api.sofascore.com/api/v1/search/all?q=" + team
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
        navigate("/team/" + teamId + "/" + team)
    }
    return (<></>);
}

export default Load;