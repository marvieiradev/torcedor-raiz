import { useNavigate } from "react-router-dom";
import { ArrowLeft, Heart } from "lucide-react";
const Header = ({ fav, id }) => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate("/myteam");
    };

    const handleFavorite = () => {
        localStorage.setItem("teamId", id)
        navigate("/myteam");
    };

    return (
        <>
            <div className="sticky top-0 z-50 border-b border-solid border-bgprimary w-full p-3 bg-gray-800 max-w-[1280px]">
                <div className="flex flex-row justify-between w-full px-4 items-center">
                    <div className="flex flex-col items-center cursor-pointer text-white" onClick={handleNavigate}>
                        <ArrowLeft />
                        <p className="text-xs">Voltar</p>
                    </div>
                    <div className="justify-center">
                        <p className="text-center text-xl text-white">Torcedor <span className="font-bold text-green-600">Raiz</span></p>
                    </div>
                    <div className="flex flex-col items-center cursor-pointer text-white min-w-[20px]" onClick={handleFavorite}>
                        <div className={fav}>
                            <Heart />
                            <p className="text-xs">Salvar</p>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Header;