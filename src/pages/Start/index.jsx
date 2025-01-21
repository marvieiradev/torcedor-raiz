import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

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
        <div className="container">
            <div className="flex flex-col flex-1 min-h-screen items-center justify-center">
                <div className="flex flex-col justify-center w-full max-w-[1280px] text-string px-8 md:px-10 text-justify space-y-4 font-semibold">
                    <p className="text-2xl text-center font-bold md:3xl">Bem vindo ao</p>
                    <img src="/logo.svg" alt="Torcedor Raiz" className="h-[30px] md:h-[60px]" />
                    <p className="text-lg mt-2 md:text-2xl">Com o Torcedor Raiz, você pode acompanhar todas as informações como estatísticas, jogos recentes, próximos jogos e várias outras informações sobre o seu time favorito.</p>
                    <p className="text-lg md:text-2xl">Para escolher seu time, basta clicar no botão pesquisar e encontrar seu time favorito clicando no icone: &#9825;</p>
                </div>
                <div className="bg-card text-string flex px-4 py-2 rounded-xl mt-6 gap-4 md:text-xl cursor-pointer" onClick={hasStart}>
                    <Search />
                    Pesquisar
                </div>
            </div >
        </div>
    );
}

export default Start;