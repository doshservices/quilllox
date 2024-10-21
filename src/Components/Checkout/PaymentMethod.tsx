import { useSelector } from "react-redux"
import { styles } from "../../utils/styles"
import { RootState } from "../../store/rootReducer";

export const PaymentMethod = () => {
    const seat: any = useSelector((state: RootState) => state?.table?.table)

    return (
        <>
            <p className="bg-[#FFFBEC] font-nunito text-[.815rem] text-[#222222] rounded-md p-3">This is an e-ticket event. Please ensure you can display your tickets on your phone or bring printed copies, as you will not gain access to the venue without them.</p>
            <div className='bg-[#2D2D2D] p-4 text-white mt-4 rounded-[4px]'>
                <h3 className='text-lg font-montserrat font-medium'>Asake Lungu Boy Tour</h3>
                <p className='text-sm font-light mt-1 mb-4'>Friday 06 Sept 2024, 22:00-05:00</p>
                <div className='flex items-center justify-between font-nunito border-t-[#F8F8F81A] border-t-[1px] py-4'>
                    <p>{seat?.numberOfGuest} x {seat?.name}</p>
                    <p className='text-[.93rem]'>N{seat.price}</p>
                </div>
                <p className='font-nunito flex justify-end items-center text-lg gap-4  border-t-[#F8F8F81A] border-t-[1px] pt-4'><span className='text-sm font-light'>Total</span>N {seat?.price}</p>
            </div>
            {/* <div className='bg-[#2D2D2D] p-4 text-white mt-4 rounded-[4px] pb-12'>
                <h3 className='text-lg font-montserrat font-medium border-b-[#F8F8F81A] border-b-[1px] pb-1'>Choose Payment Method</h3>
            </div> */}
            <button className={`${styles.primaryBtn} w-full mt-12 mb-8`}>Continue</button>
        </>
    )
}