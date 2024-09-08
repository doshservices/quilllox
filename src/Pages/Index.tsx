import { Link } from "react-router-dom";
import { AppMiniLogo } from "../assets/AppLogo";
import { LatestNews } from "../Components/blog/LatestNews";
import UpComingEvents from "../Components/events/UpComingEvents";
import { PrivateHire } from "../Components/PrivateHire";
import { upcomingEvents } from "../data/upcomingEvents";
import { styles } from "../utils/styles";
import bgHero from '../assets/Hero Section.png'
import { appLogoBg } from "../utils/constants";

const HomePage = () => {
    return (
        <>
            <div style={{ background: `url(${bgHero})` }} className="min-h-[650px] 2xl:min-h-[750px] flex items-center justify-center px-[5%] border-b-red-primary border-b-[1px] bg-cover bg-no-repeat relative z-10 overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    className="w-full h-full absolute scale-[3.8] xsm:scale-[3.2] ssm:scale-[2.7] sm:scale-[2] lg:scale-[1.3] 2xl:scale-[2] -z-[2]"
                    src="https://res.cloudinary.com/dbz1rgohb/video/upload/v1725829149/quillox/6309036_Women_Young_Women_3840x2160_xauarr.mp4">
                </video>
                <div className="absolute inset-0 bg-black/30 -z-[1] pointer-events-none"></div>
                <section className="text-white text-center max-w-[698px]">
                    <p className="font-medium text-sm font-montserrat">WELCOME TO</p>
                    <h1 className="text-3xl sm:text-[4rem] font-montserrat my-8 font-normal leading-[1.2]">QUILOX NIGHTCLUB</h1>
                    <p className="font-nunito text-[.95rem]">Experience opulence like never before, where every night is a celebration of style, elegance, and unparalleled luxury.</p>
                    <div className="flex justify-center gap-4 sm:gap-8 mt-12">
                        <button className={styles?.primaryBtn}>BUY TICKETS</button>
                        <button className={styles?.primaryBtn}>VIP RESERVATIONS</button>
                    </div>
                </section>
            </div>
            <section className="px-[5%] py-16 text-center relative overflow-hidden bg-Primary200">
                <img src={appLogoBg} alt="app logo" className="max-w-[70%] sm:h-[97%] absolute z-[-1] opacity-5 left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]" />
                <div className="mx-auto w-fit mb-3">
                    <AppMiniLogo />
                </div>
                <h2 className="text-light300 text-sm font-montserrat font-medium mb-6">LAGOS BEST NIGHTCLUB</h2>
                <h3 className="text-light300 text-2xl sm:text-4xl font-montserrat pb-2 font-normal">LUXURY IS THE LIFESTYLE HERE</h3>
                <p className="font-nunito text-ash100 text-sm font-semibold leading-[1.8] my-8">Quilox Nightclub and Bar, located on Victoria Island, redefines elite nightlife in Nigeria with its breathtaking design and unparalleled ambiance. Since opening in 2013, Quilox has set the standard as one of the most prestigious and opulent nightclubs in the country. The club boasts a stunning, one-of-a-kind decor and cutting-edge lighting that create an immersive experience. Paired with world-class customer service, renowned DJs, and an over-the-top sound system, Quilox delivers an unforgettable night for those who seek the extraordinary.</p>
                <button className={`${styles?.primaryBtn} mx-auto text-white`}>Explore Quilox in VR</button>
            </section>
            <div className="px-[5%] py-16 bg-Primary200 border-t-red-primary border-t-[1px] border-b-red-primary border-b-[1px] relative z-10 overflow-hidden">
                <div className="flex items-center justify-between gap-4 flex-wrap mb-8">
                    <h3 id='upcoming-events' className="text-light300 font-normal text-[.95rem] ssm:text-lg sm:text-3xl font-montserrat">UPCOMING EVENTS</h3>
                    <Link className={`${styles?.primaryBtn} text-[.8rem] ssm:text-sm text-white`} to='/all-events'>View all events</Link>
                </div>
                <UpComingEvents
                    events={upcomingEvents}
                    rows={'xsm:grid-cols-2 md:grid-cols-4'}
                />
            </div>
            <LatestNews />
            <PrivateHire />
        </>
    )
}

export default HomePage;