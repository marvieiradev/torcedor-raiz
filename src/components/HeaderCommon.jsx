import { useNavigate } from "react-router-dom";
import { ArrowLeft, Heart } from "lucide-react";
import Header from "./Header";

const HeaderCommon = ({ fav, team }) => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate("/myteam");
    };

    const handleFavorite = () => {
        var saveTeam = JSON.stringify(team);
        console.log(saveTeam)
        localStorage.setItem("team", saveTeam);
        navigate("/myteam");
    };



    return (
        <>
            <Header>
                <div
                    className="flex flex-col items-center cursor-pointer text-white"
                    onClick={handleNavigate}
                >
                    <ArrowLeft />
                    <p className="text-xs">Voltar</p>
                </div>
                <div className="justify-center">
                    <img src="/logo.svg" alt="Torcedor Raiz" className="h-[22px]" />
                </div>
                <div
                    className="flex flex-col items-center cursor-pointer text-white min-w-[20px]"
                    onClick={handleFavorite}
                >
                    <div className={fav}>
                        <Heart />
                        <p className="text-xs">Salvar</p>
                    </div>
                </div>
            </Header>
        </>
    );
};

export default HeaderCommon;
