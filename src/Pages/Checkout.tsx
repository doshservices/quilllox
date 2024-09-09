import { useState } from 'react';
import tourLogo from '../assets/35f1cf5d-17a3-4eac-bfa0-1f2bfe2f59ec.png'
import { PaymentForm } from '../Components/Checkout/PaymentForm';
import { PaymentMethod } from '../Components/Checkout/PaymentMethod';
import { PrivateHire } from '../Components/PrivateHire';
import { PagesContainer } from '../Components/PagesContainer';

const Checkout = () => {

    const [paymentTab, setPaymentTab] = useState('method')
    const switchTabs = (tab: string) => {
        setPaymentTab(tab)
    }

    return (
        <PagesContainer>
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
                        <img src={tourLogo} className='w-full mx-auto' alt="" />
                        <section className='bg-[#1C141B] my-6 rounded-[4px] p-4 border-[1px] border-[#0000001A]'>
                            <h3 className='font-montserrat text-xl font-medium'>Asake Lungu Boy Tour</h3>
                            <p role='time' className='font-light font-nunito my-3'>Friday 06 Sept 2024, 22:00-05:00</p>
                            <p className='font-light font-nunito text-sm'>Performing</p>
                            <a className='text-yellow300 font-light text-sm underline font-nunito'>Asake</a>
                        </section>
                        <div className="font-nunito bg-[#1C141B] rounded-[4px] border-[1px] border-[#0000001A] p-4 text-center text-[.93rem]">
                            <p>Complete order before the timer ends</p>
                            <p className='font-bold text-xl text-yellow300'>05:30</p>
                        </div>
                    </div>
                </div>
                <div className='shadow-shawdowBooking py-4 px-5 bg-[#1C141B] h-fit rounded-[4px]'>
                    {paymentTab === 'method' ?
                        <PaymentMethod />
                        :
                        <PaymentForm />
                    }
                </div>
            </div>
            <PrivateHire />
        </PagesContainer>
    )
}

export default Checkout;