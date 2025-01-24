import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

const Start = () => {
    const id = localStorage.getItem("team");
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
        <div className="container text-string">
            <div className="flex flex-col flex-1 min-h-screen items-center justify-center">
                <div className="flex flex-col justify-center w-full max-w-[1280px] text-string px-8 md:px-10 text-justify space-y-4">
                    <div className="lg:pb-8 flex flex-col justify-center">
                        <p className="text-2xl text-center font-bold md:text-3xl lg:pb-2">Bem vindo ao</p>
                        <img src="/logo.svg" alt="Torcedor Raiz" className="h-[30px] md:h-[50px] lg:[60px]" />
                    </div>
                    <div className="flex bg-primary justify-center items-start rounded-xl gap-2 p-2">
                        <p className="text-sm md:text-md lg:text-lg xl:text-xl">
                            O Torcedor Raiz é o aplicativo perfeito para os fãs de futebol que querem ficar por dentro de tudo sobre o seu time do coração. Com o Torcedor Raiz, você pode:
                            Escolher o seu time do coração e ver as principais estatísticas do time, como jogos, vitórias, derrotas, gols marcados e sofridos.
                            Fique por dentro dos últimos jogos do seu time e saiba quando serão os próximos.
                            Com base nas partidas anteriores, o Torcedor Raiz tenta prever o resultado do próximo jogo do seu time.
                        </p>
                    </div>
                    <p className="font-semibold text-center text-base md:text-lg lg:text-xl">Instruções:</p>
                    <div className="flex flex-col gap-2 lg:flex-row">
                        <div className="flex bg-primary justify-center items-start rounded-xl gap-2 p-2">
                            <div className="flex p-1 justify-start bg-card rounded-xl items-center">
                                <img src="/save.svg" alt="" className="w-[70px]" />
                            </div>
                            <p className="text-sm md:text-md lg:text-lg xl:text-xl">Para adicionar seu time como favorido, basta clicar no botão "Salvar".</p>
                        </div>
                        <div className="flex bg-primary justify-center items-start rounded-xl gap-2 p-2">
                            <div className="flex p-1 justify-center bg-card rounded-xl items-center">
                                <img src="/remove.svg" alt="" className="w-[70px]" />
                            </div>
                            <p className="text-sm md:text-md lg:text-lg xl:text-xl">Para remover seu time dos favoritos, basta clicar no botão "Remover".</p>
                        </div>
                    </div>
                </div>
                <div className="bg-card text-string flex px-4 py-2 rounded-xl mt-6 gap-4 md:text-lg cursor-pointer justify-center items-center" onClick={hasStart}>
                    <Search />
                    Pesquisar
                </div>
            </div >
        </div>
    );
}

export default Start;