const Header = ({ children }) => {
    return (
        <>
            <div className="sticky top-0 z-50 border-b border-solid border-bgprimary w-full p-3 bg-gray-800 max-w-[1280px]">
                <div className="flex flex-row justify-between w-full px-4 items-center">
                    {children}
                </div>
            </div >
        </>
    );
}

export default Header;