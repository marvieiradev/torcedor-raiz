const CardInfo = ({ title, text }) => {
    return (
        <div className="animscale flex flex-col bg-primary justify-center rounded-xl py-1 px-2 space-y-2">
            <p className="text-start text-string_accent font-medium text-xs lg:text-base">{title}:</p>
            <p className="text-start font-semibold font-base text-sm lg:text-base">{text}</p>
        </div>
    );
}

export default CardInfo;