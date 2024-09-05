import { AppMiniLogo } from "../assets/AppLogo";
import { LatestNews } from "../Components/blog/LatestNews";
import UpComingEvents from "../Components/events/UpComingEvents";
import { PrivateHire } from "../Components/PrivateHire";
import { styles } from "../utils/styles";

const HomePage = () => {
    return (
        <>
            <div className="min-h-[500px] flex items-center justify-center">
                <section className="text-white text-center max-w-[698px]">
                    <p className="font-medium text-sm font-montserrat">WELCOME TO</p>
                    <h1 className="text-3xl sm:text-[4rem] font-montserrat my-8 font-normal">QUILOX NIGHTCLUB</h1>
                    <p className="font-nunito text-[.95rem]">Experience opulence like never before, where every night is a celebration of style, elegance, and unparalleled luxury.</p>
                    <div className="flex justify-center gap-4 sm:gap-8 mt-12">
                        <button className={styles?.primaryBtn}>BUY TICKETS</button>
                        <button className={styles?.primaryBtn}>VIP RESERVATIONS</button>
                    </div>
                </section>
            </div>
            <section className="px-[5%] py-16 text-center">
                <div className="mx-auto w-fit mb-3">
                    <AppMiniLogo />
                </div>
                <h2 className="text-light300 text-sm font-montserrat font-medium mb-6">LAGOS BEST NIGHTCLUB</h2>
                <h3 className="text-light300 text-2xl sm:text-4xl font-montserrat pb-2 font-normal">LUXURY IS THE LIFESTYLE HERE</h3>
                <p className="font-nunito text-ash100 text-sm font-semibold leading-[1.8] my-8">Quilox Nightclub and Bar, located on Victoria Island, redefines elite nightlife in Nigeria with its breathtaking design and unparalleled ambiance. Since opening in 2013, Quilox has set the standard as one of the most prestigious and opulent nightclubs in the country. The club boasts a stunning, one-of-a-kind decor and cutting-edge lighting that create an immersive experience. Paired with world-class customer service, renowned DJs, and an over-the-top sound system, Quilox delivers an unforgettable night for those who seek the extraordinary.</p>
                <button className={`${styles?.primaryBtn} mx-auto text-white`}>Explore Quilox in VR</button>
            </section>
            <UpComingEvents />
            <LatestNews />
            <PrivateHire />
        </>
    )
}

export default HomePage;