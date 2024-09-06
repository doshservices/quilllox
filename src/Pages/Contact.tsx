import { AppMiniLogo } from "../assets/AppLogo";
import { styles } from "../utils/styles";
import map from '../assets/map.png'
import { PrivateHire } from "../Components/PrivateHire";

const Contact = () => {
    return (
        <>
            <div className="flex items-center justify-center text-center py-16 px-[5%]">
                <section id='contact' className="max-w-[870px]">
                    <div className="mx-auto w-fit mb-3">
                        <AppMiniLogo />
                    </div>
                    <p className="text-light300 font-medium text-sm mb-5 font-montserrat">QUILOX NIGHTCLUB</p>
                    <h3 id='contact' className="text-light300 font-normal text-lg sm:text-3xl font-montserrat mb-10">CONTACT US</h3>
                    <p className="font-nunito text-ash100 text-sm font-semibold">
                        If you need to contact the venue for any reason please use the buttons below that correspond to your enquiry. For directions use the map below.
                    </p>
                    <div className="flex justify-center md:justify-between text-white mt-12 gap-4 flex-wrap">
                        <a className={`${styles.primaryBtn} font-normal`} href="tel:+">LOST PROPERTY</a>
                        <a className={`${styles.primaryBtn} font-normal`} href="mailto:">COMPLAINT</a>
                        <a className={`${styles.primaryBtn} font-normal`} href="mailto:">GENERAL ENQUIRIEST</a>
                    </div>
                </section>
            </div>
            <div className="py-16 px-[5%]">
                <img src={map} className="w-full" alt="" />
            </div>
            <PrivateHire />
        </>
    )
}

export default Contact;