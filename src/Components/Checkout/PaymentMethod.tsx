import { styles } from "../../utils/styles"
import { EventStoreTickets } from "../Cart/EventStoreTickets"

export const PaymentMethod = () => {
    return (
        <>
            <p className="bg-[#FFFBEC] font-nunito text-[.815rem] text-[#222222] rounded-md p-3">This is an e-ticket event. Please ensure you can display your tickets on your phone or bring printed copies, as you will not gain access to the venue without them.</p>
            <EventStoreTickets />
            <div className='bg-[#2D2D2D] p-4 text-white mt-4 rounded-[4px] pb-12'>
                <h3 className='text-lg font-montserrat font-medium border-b-[#F8F8F81A] border-b-[1px] pb-1'>Choose Payment Method</h3>
            </div>
            <button className={`${styles.primaryBtn} w-full mt-12 mb-8`}>Continue</button>
        </>
    )
}