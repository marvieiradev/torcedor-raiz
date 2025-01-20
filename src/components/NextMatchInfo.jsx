import React, { useEffect, useState } from "react";
import { Circle, Triangle } from "lucide-react";

const NextMatchInfo = ({ results, name }) => {
    const [teamAvg, setTeamAvg] = useState(0);
    const [win, setWin] = useState(0);
    const [draw, setDraw] = useState(0);
    const [lost, setlost] = useState(0);
    const [report, setReport] = useState(0);

    useEffect(() => {
        let pts = 0;
        let w = 0;
        let d = 0;
        let l = 0;
        results.map((r) => {
            if (r == "W") {
                pts += 3;
                w++;
            } else if (r == "D") {
                pts += 1;
                d++;
            } else {
                pts += 0;
                l++;
            }
        });
        setTeamAvg(pts / 5);
        setWin(w);
        setDraw(d);
        setlost(l);
        teamReport()
    });

    const teamReport = () => {
        if (teamAvg <= 1.0) {
            setReport(
                `Na próxima partida, o ${name} tem chances de perder para o seu adversário`
            );
        } else if (teamAvg <= 1.8) {
            setReport(
                `Na próxima partida, o ${name} pode encerrar a partida com um empate`
            );
        } else if (teamAvg <= 2.4) {
            setReport(
                `Na próxima partida, o ${name} tem uma boa chance de vencer seu adversário`
            );
        } else if (teamAvg <= 3.0) {
            setReport(
                `Na próxima partida, o ${name} tem grandes chances de vencer seu adversário`
            );
        }
    };

    return (
        <>
            <div>
                <div className="bg-gray-800 px-4 mx-4 text-white rounded-xl lg:grid lg:grid-2">
                    <div className="flex gap-2 justify-center p-1">
                        <p className="text-lg font-semibold">Últimos Resultados</p>
                    </div>
                    <div className="flex justify-between bg-black px-4 py-4 items-center w-[100%] rounded-xl">
                        {results.map((item) =>
                            item == "W" ? (
                                <div className="flex flex-col justify-center items-center gap-1">
                                    <div className="text-green-500">
                                        <Triangle strokeWidth={3} />
                                    </div>
                                    <p className="text-xs">Vitória</p>
                                </div>
                            ) : item == "L" ? (
                                <div className="flex flex-col justify-center items-center gap-1">
                                    <div className="text-red-500 rotate-180">
                                        <Triangle strokeWidth={3} />
                                    </div>
                                    <p className="text-xs">Derrota</p>
                                </div>
                            ) : (
                                <div className="flex flex-col justify-center items-center gap-1">
                                    <div className="text-grey-500">
                                        <Circle strokeWidth={3} />
                                    </div>
                                    <p className="text-xs">Empate</p>
                                </div>
                            )
                        )}
                    </div>
                    <div className="flex gap-4 justify-center">
                        <p className="text-white text-sm">{`VIT: ${win}`}</p>
                        <p className="text-white text-sm">{`EMP: ${draw}`}</p>
                        <p className="text-white text-sm">{`DER: ${lost}`}</p>
                        {results.length >= 5 && (
                            <p className="text-white text-sm">{`APROV: ${(
                                (teamAvg / 3) *
                                100
                            ).toFixed(0)}%`}</p>
                        )}
                    </div>

                </div>
                <div className="px-4 py-2">
                    {results.length >= 5 && (
                        <p className="text-yellow-400 font-semibold text-center text-sm lg:text-base">{report}</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default NextMatchInfo;
