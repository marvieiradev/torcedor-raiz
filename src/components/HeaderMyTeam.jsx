import { useNavigate } from "react-router-dom";
import { Search, HeartOff } from "lucide-react";
import Header from "./Header";
const HeaderMyTeam = () => {
    const navigate = useNavigate();

    const handleSearch = () => {
        navigate("/home");
    };

    const handleClear = () => {
        localStorage.removeItem("teamId");
        navigate("/");
    };
    return (
        <>
            <Header>
                <div
                    className="flex flex-col items-center cursor-pointer text-string"
                    onClick={handleSearch}
                >
                    <Search />
                    <p className="text-xs">Buscar</p>
                </div>
                <div className="justify-center">
                    <img src="/logo.svg" alt="Torcedor Raiz" className="h-[22px]" />
                </div>
                <div
                    className="flex flex-col items-center cursor-pointer text-string"
                    onClick={handleClear}
                >
                    <HeartOff />
                    <p className="text-xs">Remover</p>
                </div>
            </Header>
        </>
    );
};

export default HeaderMyTeam;
