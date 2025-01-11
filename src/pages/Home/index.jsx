import leagues from "../../data/leagues.js";
import { Link } from "react-router-dom";

export function Home() {
    return (
        <>
            <h1 className="uppercase text-xl lg:text-2xl text-center font-bold text-dark mt-2 mb-4 lg:mb-6">
                ESCOLHA UMA LIGA / PAÍS
            </h1>
            <div className="grid grid-cols-2 gap-x-3 gap-y-3 xs:grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 lg:gap-5 px-4">
                {
                    leagues.map((l) => (
                        <div
                            key={l.name}
                            className="flex flex-col bg-primary border rounded-xl p-2 items-center gap-2 shadow-xs w-[165px] h-[135px] hover:shadow-lg place-items-center relative"
                        >
                            <Link to={`/search/${l.id}`}>
                                <img src={l.country} className="absolute top-0 left-1" />
                                <img src={l.img}
                                    alt={l.title}
                                    loading="lazy"
                                    className="flex aspect-square h-[40%] w-full justify-center rounded-lg object-contain align-middle p-1"
                                />
                                <p className="uppercase line-clamp-2 h-9 font-bold overflow-hidden text-ellipsis text-xs md:text-sm lg:text-md text-center text-white mt-1 mb-1 leading-2">
                                    {l.title}
                                </p>
                            </Link>
                        </div>
                    )
                    )}
            </div>


            {/* 
            <h1>Home</h1>
            {leagues.map((league) => {
                return <div key={league.name}>
                    <Link >
                        <p>{league.name}</p>
                    </Link>
                </div>
            })}*/}
        </>
    );
}