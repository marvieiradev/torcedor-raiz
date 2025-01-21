import { useNavigate } from "react-router-dom";
const NotFound = () => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate("/");
    };
    return (
        <>
            <div className="flex flex-col gap-4 p-8 h-screen justify-center items-center">
                <p className="text-string text-xl lg:text-2xl text-cente font-semibold">Página não encontrada!</p>
                <button className="bg-white text-primary px-6 py-2 font-semibold rounded-xl" onClick={handleNavigate}>Voltar</button>
            </div>

        </>);
}

export default NotFound;