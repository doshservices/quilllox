import { AppMiniLogo } from "../../assets/AppLogo"
import { news } from "../../data/news"
import { IUpcomingEvents } from "../../utils/interface"
import { styles } from "../../utils/styles"

export const LatestNews = () => {

    return (
        <section className="text-center font-montserrat px-[5%] py-16 bg-[#111921]">
            <div className="mx-auto w-fit mb-3">
                <AppMiniLogo />
            </div>
            <p className="text-light300 font-medium text-sm mb-2">LAGOS BEST NIGHTCLUB</p>
            <h3 id='upcoming-events' className="text-light300 font-normal text-[.95rem] ssm:text-lg sm:text-3xl font-montserrat">OUR LATEST NEWS</h3>
            <div className="flex gap-4 md:gap-6 justify-center mt-16 flex-wrap lg:w-[90%] mx-auto">
                {news.map((news: IUpcomingEvents, index: number) =>
                    <article key={index} className="border-red-primary border-[1px] rounded-[4px] overflow-hidden bg-white max-w-[450px] grow basis-[300px]">
                        <figure><img src={news.img} alt={news.name} className="w-full h-[200px] sm:h-[250px] object-cover" /></figure>
                        <div className="px-4 py-4 md:py-6">
                            <p role='time' className="text-[#2D2D2D] flex items-center justify-center gap-2 mb-2">
                                <span>{news.month}</span>
                                <span className="font-medium">{news.date}</span>
                                <span>{news.day}</span>
                            </p>
                            <p className="text-[#1E1E1E] font-semibold text-base">{news.name}</p>
                            <button className={`${styles.primaryBtn} mx-auto mt-8 hover:text-white`}>Read More</button>
                        </div>
                    </article>
                )}
            </div>
        </section>
    )
}