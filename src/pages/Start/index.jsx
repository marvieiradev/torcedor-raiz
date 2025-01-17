import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Start = () => {
    const id = localStorage.getItem("teamId");
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            navigate("/myteam");
        }
    })

    const hasStart = () => {
        localStorage.setItem("start", true);
        navigate("/home");
    }

    return (
        <div>
            <h1 className="text2xl text-white">Teste</h1>
            <div className="bg-white text-black" onClick={hasStart}>Entar</div>
        </div>
    );
}

export default Start;