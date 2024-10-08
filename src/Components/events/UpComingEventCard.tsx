import { Link } from "react-router-dom";
import { IUpcomingEvents } from "../../utils/interface";
import moment from "moment";

const UpComingEventCard = (event: IUpcomingEvents, border?: string, bg?: string) => {
    const name = event?.name?.replace(/\s+/g, '-')

    return (
        <Link to={`/event/${name}/${event?._id}`} className="text-white font-montserrat flex flex-col">
            <div className="grow">
                <img src={event.image} className="w-full min-h-full" alt={event?.name} />
            </div>
            <div className={`flex items-center gap-3 pt-4 ${bg} ${border}`}>
                <p role='time' className="text-center pr-2 border-r-[2px] border-r-white">
                    <span className="block text-xs md:text-sm">{moment(event?.date ?? 'N/A').format('MMMM')}</span>
                    <span className="text-lg md:text-[1.4rem] leading-[1.2] block">{moment(event?.date ?? 'N/A').format('dddd')}</span>
                    <span className="block text-xs md:text-sm"> {moment(event?.date ?? 'N/A').format('D')}</span>
                </p>
                <p className="grow text-sm lg:text-base">{event.name}</p>
            </div>
        </Link>
    )
}

export default UpComingEventCard;