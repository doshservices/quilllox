import { IUpcomingEvents } from "../../utils/interface";
import UpComingEventCard from "./UpComingEventCard";

const UpComingEvents = ({ events, rows }: { events: IUpcomingEvents[], rows: string }) => {

    return (
        <section id='upcoming-events'>
            <div className={`grid ${rows} gap-4 md:gap-6 lg:gap-8`}>
                {events?.map((event: IUpcomingEvents, index: number) =>
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