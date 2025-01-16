import { useNavigate } from "react-router-dom";
import { Search, HeartOff } from "lucide-react";
const HeaderMyTeam = () => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate("/");
    };

    const handleClear = () => {
        localStorage.clear();
        navigate("/")
    };
    return (
        <>
            <div className="sticky top-0 z-50 border-b border-solid border-bgprimary w-full p-3 bg-gray-800 max-w-[1280px]">
                <div className="flex flex-row justify-between w-full px-4 items-center">
                    <div className="flex flex-col items-center cursor-pointer text-white" onClick={handleNavigate}>
                        <Search />
                        <p className="text-xs">Buscar</p>
                    </div>
                    <div className="justify-center">
                        <p className="text-center text-xl text-white">Torcedor <span className="font-bold text-green-600">Raiz</span></p>
                    </div>
                    <div className="flex flex-col items-center cursor-pointer text-white" onClick={handleClear}>
                        <HeartOff />
                        <p className="text-xs">Remover</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeaderMyTeam;