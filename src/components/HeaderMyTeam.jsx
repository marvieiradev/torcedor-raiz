import { useNavigate } from "react-router-dom";
import { Search, HeartOff } from "lucide-react";
import Header from "./Header";
import Alert from "./AlertDialog";
const HeaderMyTeam = () => {
    const navigate = useNavigate();

    const handleSearch = () => {
        navigate("/home");
    };

    const handleClear = () => {
        localStorage.removeItem("team");
        navigate("/");
    };
    return (
        <>
            <Header>
                <div
                    className="flex flex-col justify-center items-center cursor-pointer text-string"
                    onClick={handleSearch}
                >
                    <Search />
                    <p className="text-xs">Buscar</p>
                </div>
                <div className="justify-center">
                    <img src="/logo.svg" alt="Torcedor Raiz" className="h-[22px]" />
                </div>

                <Alert action={handleClear} message={"Deseja remover esse time como favorito?"}>
                    <div className="flex flex-col justify-center items-center cursor-pointer text-string">
                        <HeartOff />
                        <p className="text-xs">Remover</p>
                    </div>
                </Alert>
            </Header>
        </>
    );
};

export default HeaderMyTeam;
