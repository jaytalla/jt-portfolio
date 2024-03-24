import ReactIcon from '../../assets/icons/react.png'

export const ProgressBar = ({val, height}) => {
    return (
        <div style={{width: "100%", height:height}} className="w-[80%] h-[10px] bg-jt-dark-primary-light dark:bg-black rounded-md">
            <div style={{width:val+"%", height:height}} className="h-[10px] rounded-md bg-jt-dark-primary-neutral dark:bg-jt-txt-neon-green"></div>
        </div>
    )
}


export const CardWithIcon = ({imgname, percentage}) => {
    {/* CARD  */}
    return (
        <div className='mb-5 group
                        w-fit flex flex-col md:mb-0 justify-center items-start h-full '>
            <img className='w-[100px] h-[100px] group-hover:scale-110 duration-100 mb-5 ' src={imgname} alt={imgname} />
            {/* PROGRESS BAR  */}
            <ProgressBar val={percentage} height={"20px"}/>
        </div>
    )
}