import ReactIcon from '../../assets/icons/react.png'

export const ProgressBar = (val) => {
    return (
        <div className="w-[80%] h-[10px] bg-black rounded-md">
            <div style={{width: "20%"}} className="h-[10px] rounded-md bg-jt-txt-neon-green"></div>
        </div>
    )
}


export const CardWithIcon = () => {
    {/* CARD  */}
    return (
        <div className='mb-5
                        w-fit flex flex-col md:mb-0 justify-center items-start h-full '>
            <img className='w-[80%]  mb-2 ' src={ReactIcon} alt="" />
            {/* PROGRESS BAR  */}
            <ProgressBar/>
        </div>
    )
}