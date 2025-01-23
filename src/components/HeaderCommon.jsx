import { useNavigate } from "react-router-dom";
import { ArrowLeft, Heart } from "lucide-react";
import Header from "./Header";
import Alert from "./AlertDialog";

const HeaderCommon = ({ fav, team }) => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(-1);
    };

    const handleFavorite = () => {
        var itens = JSON.parse(sessionStorage.getItem("itens"));
        var saveTeam = JSON.stringify({ id: team, color1: itens.color1, color2: itens.color2, badge: itens.badge });
        localStorage.setItem("team", saveTeam);
        sessionStorage.clear()
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
