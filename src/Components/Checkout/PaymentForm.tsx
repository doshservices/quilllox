//@ts-nocheck
import { useState } from "react";
import { styles } from "../../utils/styles"
import { PaymentField } from "../Input/PaymentField"
import { useSelector } from "react-redux";
import { RootState } from "../../store/rootReducer";
import useReservation from "../../requests/reservation";
import { IEvent } from "../../utils/interface";
import { closePaymentModal, useFlutterwave } from 'flutterwave-react-v3';
// import { emptyTable, makePayment } from "../../store/slice/bookingSlice";
import toast from "react-hot-toast";

export const PaymentForm = (event: IEvent) => {

    const { createReservation, loading, reservationId } = useReservation()
    console.log(reservationId);

    // const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const flutterKey = import.meta.env.VITE_TEST_FLUTTERWAVE_KEY;
    const table: any = useSelector((state: RootState) => state?.table?.table)
    const paymentProp: string = useSelector((state: RootState) => state?.table?.payment)

    const payload = {
        username: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        table: table?._id,
        event: event?._id ?? '',
        amount: table?.price,
        date: event?.date
    }

    const config = {
        public_key: flutterKey,
        tx_ref: Date.now(),
        amount: table?.price,
        currency: 'NGN',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
            email: formData?.email,
            phone_number: '070********',
            name: `${formData.firstName} ${formData.lastName}`,
        },
        customizations: {
            title: 'Quilox',
            description: 'Payment for Seat reservation',
            logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
        },
    };

    const handleFlutterPayment = useFlutterwave(config);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        createReservation({ ...payload }, () => {
            if (paymentProp === 'pay') {
                handleFlutterPayment({
                    callback: async () => {
                        try {
                            await axiosInstance.patch(`reservation/mark-as-paid?reservationId=671917ec0b85ed4953ccc556`)
                            toast.success('Payment Succesful')
                        } catch (error) {
                            console.log(error);
                            toast.error('Unable to verify payment')
                            return error
                        }
                        // dispatch(emptyTable())
                        // dispatch(makePayment(''))
                        closePaymentModal()
                    },
                    onClose: () => { },
                })
            }
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <section className='bg-[#2D2D2D] pt-4 px-4 text-white rounded-[4px]'>
                <h3 className='text-lg font-montserrat font-medium border-b-[#F8F8F81A] border-b-[1px] pb-1 mb-5'>Your Details</h3>
                <PaymentField
                    name='firstName'
                    label='First Name'
                    value={formData.firstName}
                    onChange={handleChange}
                    type="text"
                />
                <PaymentField
                    name='lastName'
                    label='Last Name'
                    value={formData.lastName}
                    onChange={handleChange}
                    type='text'
                />
                <PaymentField
                    name='email'
                    label='Email Address'
                    value={formData.email}
                    onChange={handleChange}
                    type='email'
                />
            </section>
            {/* <section className='bg-[#2D2D2D] pt-4 px-4 text-white mt-4 rounded-[4px]'>
                <h4 className='text-lg font-montserrat font-medium border-b-[#F8F8F81A] border-b-[1px] pb-1 mb-5'>Card Details</h4>
                <PaymentField
                    name=''
                    label='Card Number'
                />
                <div className="grid lsm:grid-cols-2 gap-x-5">
                    <PaymentField
                        name=''
                        label='Expiry Date'
                    />
                    <PaymentField
                        name=''
                        label='Expiry Date'
                    />
                </div>
            </section> */}
            <div className='bg-[#2D2D2D] p-4 text-white mt-4 rounded-[4px]'>
                <h3 className='text-lg font-montserrat font-medium'>Asake Lungu Boy Tour</h3>
                <p className='text-sm font-light mt-1 mb-4'>Friday 06 Sept 2024, 22:00-05:00</p>
                <div className='flex items-center justify-between font-nunito border-t-[#F8F8F81A] border-t-[1px] py-4'>
                    <p>{table?.numberOfGuest} x {table?.name}</p>
                    <p className='text-[.93rem]'>N{table?.price}</p>
                </div>
                <p className='font-nunito flex justify-end items-center text-lg gap-4  border-t-[#F8F8F81A] border-t-[1px] pt-4'><span className='text-sm font-light'>Total</span>N {table?.price}</p>
            </div>
            <button disabled={loading} className={`${styles.primaryBtn} ${loading ? 'opacity-60' : 'opacity-100'} w-full mt-12 mb-8`}>
                {loading ? 'Booking...' : 'Continue'}
            </button>
            {/* <FlutterWaveButton
                className={`${styles.primaryBtn} ${loading ? 'opacity-60' : 'opacity-100'} w-full mt-12 mb-8`}
                {...fwConfig} /> */}
        </form>
    )
}