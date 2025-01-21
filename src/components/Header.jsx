const Header = ({ children }) => {
    return (
        <>
            <div className="sticky top-0 z-50 w-screen p-3 bg-card items-start justify-center">
                <div className="flex flex-row justify-between max-w-[1280px] px-4 items-center m-auto">
                    {children}
                </div>
            </div >
        </>
    );
}

export default Header;