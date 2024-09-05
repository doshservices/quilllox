import { Link } from "react-router-dom";
import { styles } from "../../utils/styles";
import UpComingEventCard from "./UpComingEventCard";
import { upcomingEvents } from "../../data/upcomingEvents";

const UpComingEvents = () => {

    return (
        <section id='upcoming-events' className="px-[5%] py-16">
            <div className="flex items-center justify-between gap-4 flex-wrap mb-8">
                <h3 id='upcoming-events' className="text-light300 font-normal text-[.95rem] ssm:text-lg sm:text-3xl font-montserrat">UPCOMING EVENTS</h3>
                <Link className={`${styles?.primaryBtn} text-[.8rem] ssm:text-sm text-white`} to='/'>View all events</Link>
            </div>
            <div className="grid xsm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                {upcomingEvents.map((event, index) =>
                    <UpComingEventCard
                        key={index}
                        {...event}
                    />
                )}
            </div>
        </section>
    )
}

export default UpComingEvents;