import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
const Header = () => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate("/");
    };
    return (
        <>
            <div className="sticky top-0 z-50 border-b border-solid border-bgprimary w-full p-3 bg-gray-800 max-w-[1280px]">
                <div className="flex flex-row justify-between w-full px-4 items-center">
                    <div className="cursor-pointer text-white" onClick={handleNavigate}>
                        <ArrowLeft />
                    </div>
                    <div className="justify-center">
                        <p className="text-center text-xl text-white">Torcedor <span className="font-bold text-green-600">Raiz</span></p>
                    </div>
                    <div className="w-[20px]"></div>
                </div>
            </div>
        </>
    );
}

export default Header;