import ReactIcon from '../../assets/icons/react.png'

export const ProgressBar = (val) => {
    return (
        <div className="w-full h-[10px] bg-black rounded-md">
            <div style={{width: "20%"}} className="h-[10px] rounded-md bg-jt-txt-neon-green"></div>
        </div>
    )
}


export const CardWithIcon = () => {
    {/* CARD  */}
    return (
        <div className='w-[20%] flex flex-col justify-center items-center h-full shadow-xl shadow-slate-950 p-2'>
            <img className='w-[60%] mb-2' src={ReactIcon} alt="" />
            {/* PROGRESS BAR  */}
            {/* <ProgressBar /> */}
        </div>
    )
}