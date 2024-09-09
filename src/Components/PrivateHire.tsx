import hireBg from '../assets/hire-bg.png'
import { styles } from '../utils/styles'

export const PrivateHire = () => {
    return (
        <div className="relative z-10 flex justify-center items-center border-t-red-primary border-t-[1px] border-b-red-primary border-b-[1px]">
            <img src={hireBg} alt="" className='min-h-[300px] object-cover w-full' />
            <div className='absolute w-full inset-0 z-[2] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] h-fit'>
                <h3 className="text-light300 font-normal text-xl sm:text-3xl font-montserrat text-center">PRIVATE HIRE</h3>
                <button className={`${styles.primaryBtn} mx-auto mt-8 text-white`}>More info</button>
            </div>
        </div>
    )
}