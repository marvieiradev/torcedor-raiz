import { useEffect, useState } from "react";
import { useParams } from "react-router";
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
    return (
        <div className="flex flex-col gap-4 p-8 h-screen justify-center items-center">
            <p className="text-string text-xl lg:text-2xl text-cente font-semibold">Carregando...</p>
        </div>
    );
}

export default Load;