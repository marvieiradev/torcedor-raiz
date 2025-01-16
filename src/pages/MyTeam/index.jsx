import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { imageTeam } from "../../data/config";
import HeaderMyTeam from "../../components/HeaderMyTeam";

const MyTeam = () => {
    const id = localStorage.getItem("teamId");
    const [myTeam, setMyTeam] = useState([]);

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate("/");
    };

    if (!id) {
        handleNavigate();
    }

    useEffect(() => {
        const getMyTeam = async () => {
            const data = await fetch("https://api.sofascore.com/api/v1/team/" + id);
            data.json().then((json) => {
                setMyTeam(json.team);
            });
        };
        getMyTeam();
    }, []);

    return (
        <>
            <div className="container">
                <div className="flex flex-col flex-1 min-h-screen items-center">
                    <HeaderMyTeam />
                    <div className="flex flex-col justify-center w-full max-w-[1280px]">
                        <img src={imageTeam + id + "/image"} alt="" className="w-[200px]" />
                        <h1 className="text-white">{myTeam.name}</h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyTeam;
