import { useSelector } from "react-redux";
import { RootState } from "../../store/rootReducer";

export const EventStoreTickets = () => {
    const seat = useSelector((state: RootState) => state?.table?.table)
    console.log(seat);
    return (
        <div className='bg-[#2D2D2D] p-4 text-white mt-4 rounded-[4px]'>
            <h3 className='text-lg font-montserrat font-medium'>Asake Lungu Boy Tour</h3>
            <p className='text-sm font-light mt-1 mb-4'>Friday 06 Sept 2024, 22:00-05:00</p>
            <div className='flex items-center justify-between font-nunito border-t-[#F8F8F81A] border-t-[1px] py-4'>
                <p>{seat?.amount} x Frontstage seat</p>
                <p className='text-[.93rem]'>N 200,000</p>
            </div>
            <div className='flex items-center justify-between font-nunito border-t-[#F8F8F81A] border-t-[1px] py-4'>
                <p>6 x Backstage seat</p>
                <p className='text-[.93rem]'>N 400,000</p>
            </div>
            <div className='flex items-center justify-between font-nunito border-t-[#F8F8F81A] border-t-[1px] py-4'>
                <p>VAT</p>
                <p className='text-[.93rem]'>N 4,000</p>
            </div>
            <p className='font-nunito flex justify-end items-center text-lg gap-4  border-t-[#F8F8F81A] border-t-[1px] pt-4'><span className='text-sm font-light'>Total</span>N 604,000</p>
        </div>
    )
}