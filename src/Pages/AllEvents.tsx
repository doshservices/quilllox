import { Link } from "react-router-dom";
import { AppMiniLogo } from "../assets/AppLogo";
import DateDropdown from "../Components/dropdown/DateDropdown";
import { PrivateHire } from "../Components/PrivateHire";
import { upcomingEvents } from "../data/upcomingEvents";
import { appLogoBg } from "../utils/constants";
import { PagesContainer } from "../Components/PagesContainer";

const AllEvents = () => {
    const events = [...upcomingEvents, ...upcomingEvents.slice(1, 3)]

    return (
        <PagesContainer>
            <section className="text-center clear-startflex justify-center items-center px-[8%] py-16 relative z-10 bg-Primary200 overflow-hidden">
                <img src={appLogoBg} alt="app logo" className="max-w-[70%] sm:h-[97%] absolute z-[-1] opacity-5 left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]" />
                <div>
                    <div className="mx-auto w-fit mb-3">
                        <AppMiniLogo />
                    </div>
                    <p className="text-light300 font-medium text-sm font-montserrat mb-5">QUILOX NIGHTCLUB</p>
                    <h2 id='upcoming-events' className="text-light300 font-normal text-lg sm:text-3xl font-montserrat mb-6">EVENTS CALENDAR</h2>
                    <p className="text-ash100 text-sm font-nunito leading-[1.8]">Immersed in an exquisite Red, Gold and Black theme, Quilox is your one-stop hub for grandee relaxation and nightlife activity. We aim to provide A-listers, jet-setters, high rollers and nightlife aficionados from all over the room to dance and dine mingle and network.</p>
                </div>
            </section>
            <div className="px-[5%] sm:px-[8%] py-16 border-t-red-primary border-t-[1px]">
                <div className="flex items-center justify-between mb-8">
                    <DateDropdown
                        placeholder="Aug 27, 2024"
                        onSelect={() => { }}
                        options={['Aug 27, 2024']}
                        maxWidth="max-w-fit"
                    />
                    <div className="flex items-center gap-3">
                        <button>
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="0.5" width="26.9413" height="26.9413" rx="3.5" stroke="#D12229" />
                                <path d="M7 13.1506V7H13.1506V13.1506H7ZM7 20.9413V14.7907H13.1506V20.9413H7ZM14.7907 13.1506V7H20.9413V13.1506H14.7907ZM14.7907 20.9413V14.7907H20.9413V20.9413H14.7907ZM8.23011 11.9204H11.9204V8.23011H8.23011V11.9204ZM16.0208 11.9204H19.7111V8.23011H16.0208V11.9204ZM16.0208 19.7111H19.7111V16.0208H16.0208V19.7111ZM8.23011 19.7111H11.9204V16.0208H8.23011V19.7111Z" fill="#D12229" />
                            </svg>
                        </button>
                        <button>
                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.23299 15.9707H17.3515C17.4157 15.9707 17.4744 15.944 17.5278 15.8905C17.5813 15.8372 17.608 15.7784 17.608 15.7142V13.5332H8.23299V15.9707ZM4.27466 8.4082H6.98299V5.9707H4.53112C4.46695 5.9707 4.4082 5.99744 4.35487 6.05091C4.30139 6.10424 4.27466 6.16299 4.27466 6.22716V8.4082ZM4.27466 12.304H6.98299V9.6582H4.27466V12.304ZM4.53112 15.9707H6.98299V13.5332H4.27466V15.7142C4.27466 15.7784 4.30139 15.8372 4.35487 15.8905C4.4082 15.944 4.46695 15.9707 4.53112 15.9707ZM8.23299 12.304H17.608V9.6582H8.23299V12.304ZM8.23299 8.4082H17.608V6.22716C17.608 6.16299 17.5813 6.10424 17.5278 6.05091C17.4744 5.99744 17.4157 5.9707 17.3515 5.9707H8.23299V8.4082ZM4.53112 17.2207C4.11014 17.2207 3.75382 17.0749 3.46216 16.7832C3.17049 16.4915 3.02466 16.1352 3.02466 15.7142V6.22716C3.02466 5.80619 3.17049 5.44987 3.46216 5.1582C3.75382 4.86654 4.11014 4.7207 4.53112 4.7207H17.3515C17.7725 4.7207 18.1288 4.86654 18.4205 5.1582C18.7122 5.44987 18.858 5.80619 18.858 6.22716V15.7142C18.858 16.1352 18.7122 16.4915 18.4205 16.7832C18.1288 17.0749 17.7725 17.2207 17.3515 17.2207H4.53112Z" fill="#E8EAED" />
                            </svg>
                        </button>
                    </div>
                </div>
                <section id='upcoming-events'>
                    <div className={`grid ssm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8`}>
                        {events?.map((event, index: number) =>
                            <Link to={`/event/${event?.name?.replace(/\s+/g, '-')}/${event?.day}`} key={index} className="border-[1px] border-red-primary rounded-[4px] overflow-hidden block">
                                <div className="text-white font-montserrat bg-[#1C141B]">
                                    <figure className="overflow-hidden">
                                        <img src={event.img} className="w-full scale-105" alt={event.name} />
                                    </figure>
                                    <div className={`flex items-center gap-3 py-4 px-2 md:px-6`}>
                                        <p role='time' className="text-center pr-2 border-r-[1px] border-r-white">
                                            <span className="block text-xs md:text-sm">{event.month}</span>
                                            <span className="text-lg md:text-[1.4rem] leading-[1.2] block">{event.date}</span>
                                            <span className="block text-xs md:text-sm">{event.day}</span>
                                        </p>
                                        <p className="grow text-sm lg:text-base">{event.name}</p>
                                    </div>
                                </div>
                            </Link>
                        )}
                    </div>
                </section>
            </div>
            <PrivateHire />
        </PagesContainer>
    )
}

export default AllEvents;