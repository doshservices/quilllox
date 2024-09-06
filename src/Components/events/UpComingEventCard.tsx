import { Link } from "react-router-dom";
import { IUpcomingEvents } from "../../utils/interface";

const UpComingEventCard = (event: IUpcomingEvents, border?: string, bg?: string) => {
    const name = event?.name?.replace(/\s+/g, '-')

    return (
        <Link to={`/event/${name}/${event.day}`} className="text-white font-montserrat block">
            <img src={event.img} className="w-full" alt={event.name} />
            <div className={`flex items-center gap-3 pt-4 ${bg} ${border}`}>
                <p role='time' className="text-center pr-2 border-r-[2px] border-r-white">
                    <span className="block text-xs md:text-sm">{event.month}</span>
                    <span className="text-lg md:text-[1.4rem] leading-[1.2] block">{event.date}</span>
                    <span className="block text-xs md:text-sm">{event.day}</span>
                </p>
                <p className="grow text-sm lg:text-base">{event.name}</p>
            </div>
        </Link>
    )
}

export default UpComingEventCard;