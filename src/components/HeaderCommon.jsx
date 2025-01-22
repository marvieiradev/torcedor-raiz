import { useNavigate } from "react-router-dom";
import { ArrowLeft, Heart } from "lucide-react";
import Header from "./Header";
import Alert from "./AlertDialog";

const HeaderCommon = ({ fav, team }) => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate("/");
    };

    const handleFavorite = () => {
        var saveTeam = JSON.stringify(team);
        localStorage.setItem("team", saveTeam);
        navigate("/myteam");
    };

    return (
        <>
            <Header>
                <div
                    className="flex flex-col justify-center items-center cursor-pointer text-string"
                    onClick={handleNavigate}
                >
                    <ArrowLeft />
                    <p className="text-xs">Voltar</p>
                </div>
                <div className="justify-center">
                    <img src="/logo.svg" alt="Torcedor Raiz" className="h-[22px]" />
                </div>

                <Alert action={handleFavorite} message={"Deseja adicionar esse time como favorito?"}>
                    <div
                        className="flex flex-col justify-center items-center cursor-pointer text-string min-w-[20px]"
                    >
                        <div className={fav}>
                            <Heart />
                            <p className="text-xs">Salvar</p>
                        </div>
                    </div>
                </Alert>
            </Header>
        </>
    );
};

export default HeaderCommon;
