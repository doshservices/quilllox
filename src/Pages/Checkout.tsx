//@ts-nocheck
import { useEffect, useState } from 'react';
import { PaymentForm } from '../Components/Checkout/PaymentForm';
import { PaymentMethod } from '../Components/Checkout/PaymentMethod';
import { PrivateHire } from '../Components/PrivateHire';
import { PagesContainer } from '../Components/PagesContainer';
import useEvents from '../requests/events';
import { SyncLoader } from 'react-spinners';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const navigate = useNavigate()
    const [paymentTab, setPaymentTab] = useState('method')
    const switchTabs = (tab: string) => {
        setPaymentTab(tab)
    }

    const { getEventById, loading, event } = useEvents()
    const id: string | null = localStorage.getItem('q-$$..##');
    console.log(event);

    useEffect(() => {
        if (id) {
            getEventById(id);
        }
    }, []);

    const [timeLeft, setTimeLeft] = useState(6 * 60);
    useEffect(() => {
        if (timeLeft === 0) {
            navigate(-1)
            return;
        }

        const intervalId = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [timeLeft]);

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    };

    return (
        <PagesContainer>
            {loading ?
                <div className='h-[30vh] flex justify-center items-center text-red-primary'>
                    <SyncLoader color='#d12229' />
                </div> :
                <>
                    <div className="text-white font-montserrat flex px-[5%] justify-between items-center gap-4 py-6 flex-wrap border-b-red-primary border-b-[1px]">
                        <p className="text-xl sm:text-3xl">CHECKOUT</p>
                        <div className="flex items-center justify-between gap-y-4 gap-x-4 sm:gap-x-12">
                            <button
                                className={paymentTab === 'method' ?
                                    "py-2.5 text-sm sm:text-base border-b-red-primary border-b-[1px]"
                                    :
                                    "py-2.5 text-sm sm:text-base text-[#F8F8F866] border-b-transparent border-b-[1px]"
                                }
                                onClick={() => switchTabs('method')}>Order Summary</button>
                            <button
                                className={paymentTab === 'details' ?
                                    "py-2.5 text-sm sm:text-base border-b-red-primary border-b-[1px]"
                                    :
                                    "py-2.5 text-sm sm:text-base text-[#F8F8F866] border-b-transparent border-b-[1px]"
                                }
                                onClick={() => switchTabs('details')}>Your Details</button>
                        </div>
                    </div>
                    <div className='text-white grid sm:grid-cols-2 md:grid-cols-[300px,_1fr] gap-x-8 md:gap-x-[8%] gap-y-8 px-[5%] lg:px-[9%] py-12 relative bg-[#171016]'>
                        <div className="ssm:max-w-[300px]">
                            <div className='static top-4 sm:sticky'>
                                <img src={event?.image} className='w-full mx-auto' alt="" />
                                <section className='bg-[#1C141B] my-6 rounded-[4px] p-4 border-[1px] border-[#0000001A]'>
                                    <h3 className='font-montserrat text-xl font-medium'>{event?.name}</h3>
                                    <p role='time' className='font-light font-nunito my-3'>{moment(event?.date ?? 'N/A').format('dddd D MMMM y')}, {event?.startTime}-{event?.endTime}</p>
                                    <p className='font-light font-nunito text-sm'>Performing</p>
                                    {/* <a className='text-yellow300 font-light text-sm underline font-nunito'>Asake</a> */}
                                </section>
                                <div className="font-nunito bg-[#1C141B] rounded-[4px] border-[1px] border-[#0000001A] p-4 text-center text-[.93rem]">
                                    <p>Complete order before the timer ends</p>
                                    <p className='font-bold text-xl text-yellow300'>{formatTime(timeLeft)}</p>
                                </div>
                            </div>
                        </div>
                        <div className='shadow-shawdowBooking py-4 px-5 bg-[#1C141B] h-fit rounded-[4px]'>
                            {paymentTab === 'method' ?
                                <PaymentMethod
                                    switchTabs={() => switchTabs('details')}
                                />
                                :
                                <PaymentForm
                                    {...event}
                                />
                            }
                        </div>
                    </div>
                </>
            }
            <PrivateHire />
        </PagesContainer>
    )
}

export default Checkout;