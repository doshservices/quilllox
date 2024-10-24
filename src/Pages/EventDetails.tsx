import { PrivateHire } from '../Components/PrivateHire'
import { styles } from '../utils/styles'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { PagesContainer } from '../Components/PagesContainer'
import useEvents from '../requests/events'
import { useEffect } from 'react'
import { SyncLoader } from 'react-spinners'
import moment from 'moment'
import useTables from '../requests/tables'
import { Tables } from '../Components/events/Tables'
import { ITables } from '../utils/interface'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/rootReducer'
import { emptyTable, makePayment } from '../store/slice/bookingSlice'

const EventDetails = () => {
    const { id } = useParams()

    const { getEventById, loading, event } = useEvents()
    const { tables, getTables } = useTables()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        getEventById(id)
        getTables()
        localStorage.setItem('q-$$..##', id as string)
        if (event) {
            localStorage.setItem('qe-$$..##', JSON.stringify(event))
        }
    }, [])

    const seat: any = useSelector((state: RootState) => state?.table?.table)

    return loading ?
        <div className='h-[60vh] flex justify-center items-center text-red-primary'>
            <SyncLoader color='#d12229' />
        </div>
        :
        <PagesContainer>
            <figure className='bg-[#171016] relative z-10 py-8 overflow-hidden border-b border-red-primary'>
                <img className='w-full max-h-[370px]' src={event?.coverImage} alt="event img" />
            </figure>
            <div className='text-white grid sm:grid-cols-2 md:grid-cols-[300px,_1fr] gap-x-8 md:gap-x-[8%] gap-y-8 px-[5%] lg:px-[9%] py-12 bg-[#171016]'>
                <div className='ssm:max-w-[300px]'>
                    <img src={event?.image} className='w-full mx-auto' alt="" />
                    <section className='bg-[#1C141B] my-6 rounded-[4px] p-4 border-[1px] border-[#0000001A]'>
                        <h3 className='font-montserrat text-xl font-medium'>{event?.name}</h3>
                        <p role='time' className='font-light font-nunito my-3'>{moment(event?.date ?? 'N/A').format('dddd D MMMM y')}, {event?.startTime}-{event?.endTime}</p>
                        <p className='font-light font-nunito text-sm'>Performing</p>
                        {/* <a className='text-yellow300 font-light text-sm underline font-nunito'>Asake</a> */}
                        <section className='mt-6 mb-16'>
                            {seat &&
                                <>
                                    <h4 className='font-normal font-montserrat text-xl mb-4'>Your Selection</h4>
                                    <div className='font-nunito text-sm flex items-center justify-between gap-4 border-b-[#F8F8F81A] border-b-[1px] py-3'>
                                        <span>{seat?.numberOfGuest} x {seat?.name}</span>
                                        <button onClick={() => dispatch(emptyTable())}>
                                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.60008 11.6023L8.00008 9.20234L10.4001 11.6023L11.1026 10.8998L8.70258 8.49984L11.1026 6.09984L10.4001 5.39734L8.00008 7.79734L5.60008 5.39734L4.89758 6.09984L7.29758 8.49984L4.89758 10.8998L5.60008 11.6023ZM8.00125 14.8332C7.12525 14.8332 6.30186 14.6669 5.53108 14.3345C4.7603 14.0021 4.08986 13.5509 3.51975 12.981C2.94964 12.4111 2.49825 11.7409 2.16558 10.9705C1.83303 10.2001 1.66675 9.37689 1.66675 8.501C1.66675 7.625 1.83297 6.80162 2.16541 6.03084C2.49786 5.26006 2.94903 4.58962 3.51891 4.0195C4.0888 3.44939 4.75897 2.998 5.52942 2.66534C6.29986 2.33278 7.12303 2.1665 7.99891 2.1665C8.87492 2.1665 9.6983 2.33273 10.4691 2.66517C11.2399 2.99761 11.9103 3.44878 12.4804 4.01867C13.0505 4.58856 13.5019 5.25873 13.8346 6.02917C14.1671 6.79962 14.3334 7.62278 14.3334 8.49867C14.3334 9.37467 14.1672 10.1981 13.8347 10.9688C13.5023 11.7396 13.0511 12.4101 12.4812 12.9802C11.9114 13.5503 11.2412 14.0017 10.4707 14.3343C9.7003 14.6669 8.87714 14.8332 8.00125 14.8332ZM8.00008 13.8332C9.48897 13.8332 10.7501 13.3165 11.7834 12.2832C12.8167 11.2498 13.3334 9.98873 13.3334 8.49984C13.3334 7.01095 12.8167 5.74984 11.7834 4.7165C10.7501 3.68317 9.48897 3.1665 8.00008 3.1665C6.51119 3.1665 5.25008 3.68317 4.21675 4.7165C3.18341 5.74984 2.66675 7.01095 2.66675 8.49984C2.66675 9.98873 3.18341 11.2498 4.21675 12.2832C5.25008 13.3165 6.51119 13.8332 8.00008 13.8332Z" fill="#D12229" />
                                            </svg>
                                        </button>
                                    </div>
                                </>
                            }
                        </section>
                        {seat &&
                            <>
                                <button
                                    onClick={() => {
                                        dispatch(makePayment('pay'))
                                        setTimeout(() => {
                                            navigate('/checkout')
                                        }, 1000)
                                    }}
                                    className={`${styles.primaryBtn} mx-auto w-fit`}>Book Now</button>
                                <button onClick={() => {
                                    dispatch(makePayment(''))
                                    setTimeout(() => {
                                        navigate('/checkout')
                                    }, 1000)
                                }} className='flex w-fit mx-auto gap-2 items-center mt-4'>
                                    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.1 14H9.9V8.6H8.1V14ZM9 6.8C9.255 6.8 9.46875 6.71375 9.64125 6.54125C9.81375 6.36875 9.9 6.155 9.9 5.9C9.9 5.645 9.81375 5.43125 9.64125 5.25875C9.46875 5.08625 9.255 5 9 5C8.745 5 8.53125 5.08625 8.35875 5.25875C8.18625 5.43125 8.1 5.645 8.1 5.9C8.1 6.155 8.18625 6.36875 8.35875 6.54125C8.53125 6.71375 8.745 6.8 9 6.8ZM9 18.5C7.755 18.5 6.585 18.2638 5.49 17.7913C4.395 17.3188 3.4425 16.6775 2.6325 15.8675C1.8225 15.0575 1.18125 14.105 0.70875 13.01C0.23625 11.915 0 10.745 0 9.5C0 8.255 0.23625 7.085 0.70875 5.99C1.18125 4.895 1.8225 3.9425 2.6325 3.1325C3.4425 2.3225 4.395 1.68125 5.49 1.20875C6.585 0.73625 7.755 0.5 9 0.5C10.245 0.5 11.415 0.73625 12.51 1.20875C13.605 1.68125 14.5575 2.3225 15.3675 3.1325C16.1775 3.9425 16.8188 4.895 17.2913 5.99C17.7638 7.085 18 8.255 18 9.5C18 10.745 17.7638 11.915 17.2913 13.01C16.8188 14.105 16.1775 15.0575 15.3675 15.8675C14.5575 16.6775 13.605 17.3188 12.51 17.7913C11.415 18.2638 10.245 18.5 9 18.5ZM9 16.7C11.01 16.7 12.7125 16.0025 14.1075 14.6075C15.5025 13.2125 16.2 11.51 16.2 9.5C16.2 7.49 15.5025 5.7875 14.1075 4.3925C12.7125 2.9975 11.01 2.3 9 2.3C6.99 2.3 5.2875 2.9975 3.8925 4.3925C2.4975 5.7875 1.8 7.49 1.8 9.5C1.8 11.51 2.4975 13.2125 3.8925 14.6075C5.2875 16.0025 6.99 16.7 9 16.7Z" fill="#E2B756" />
                                    </svg>
                                    <p className="font-light text-xs text-yellow300">Make a Reservation</p>
                                </button>
                            </>
                        }
                    </section>
                    <Link to='/all-events' className="grid grid-cols-[52px,_1fr] lsm:grid-cols-[52px,_1fr,_52px] text-center items-center gap-4 ssm:gap-8 font-nunito text-[.93rem] bg-[#1C141B] rounded-[4px] border-[1px] border-[#0000001A]">
                        <svg width="50" height="40" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="49" height="39" rx="1.5" stroke="#E2B756" />
                            <g clipPath="url(#clip0_128_6662)">
                                <path d="M20.0614 19.5607L20.9008 18.7261H32.2342C32.6952 18.7261 33.0691 19.0998 33.0691 19.5607C33.0691 20.0215 32.6952 20.3953 32.2342 20.3953H20.9008L20.0614 19.5607Z" fill="#F8F8F8" />
                                <path d="M25.3152 24.8083C25.641 25.134 25.641 25.6624 25.3152 25.9882C25.1515 26.1518 24.9383 26.2328 24.7251 26.2328C24.5118 26.2328 24.2986 26.1518 24.135 25.9882L18.2955 20.1505C18.219 20.0739 18.1559 19.9809 18.1139 19.8773C18.0733 19.7707 18.0508 19.6671 18.0508 19.5606C18.0508 19.454 18.0733 19.3504 18.1094 19.2558C18.1559 19.1403 18.2175 19.0472 18.294 18.9706L24.1365 13.133C24.4623 12.8072 24.9909 12.8072 25.3167 13.133C25.6425 13.4587 25.6425 13.9871 25.3167 14.3128L20.0628 19.5606L25.3152 24.8084L25.3152 24.8083Z" fill="#F8F8F8" />
                            </g>
                            <defs>
                                <clipPath id="clip0_128_6662">
                                    <rect width="16.88" height="15" fill="white" transform="matrix(-1 0 0 1 34 12.02)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <span className='py-1'>Back to All Events</span>
                    </Link>
                </div>
                <div className='shadow-shawdowBooking py-4 px-4 sm:px-5 bg-[#1C141B] h-fit rounded-[4px]'>
                    <p className="bg-[#FFFBEC] font-nunito text-[.815rem] text-[#222222] rounded-md p-3">
                        This event is for {event?.pg} and over - No refunds will be issued for under {event?.pg}s.
                    </p>
                    <h3 className='font-montserrat text-lg font-normal px-4 mt-6 mb-2'>TICKETS</h3>
                    {tables.map((table: ITables) =>
                        <Tables
                            key={table?._id}
                            {...table}
                        />
                    )}
                </div>
            </div>
            <PrivateHire />
        </PagesContainer>
}

export default EventDetails