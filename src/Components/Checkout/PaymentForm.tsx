import { useState } from "react";
import { styles } from "../../utils/styles"
import { PaymentField } from "../Input/PaymentField"
import { useSelector } from "react-redux";
import { RootState } from "../../store/rootReducer";
import useReservation from "../../requests/reservation";
import { IEvent } from "../../utils/interface";

export const PaymentForm = (event: IEvent) => {
    console.log(event);


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

    const table: any = useSelector((state: RootState) => state?.table?.table)

    const payload = {
        username: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        table: table?._id,
        event: event?._id ?? '',
        amount: table?.price,
        date: event?.date
    }

    const { createReservation, loading } = useReservation()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        createReservation({ ...payload })
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
        </form>
    )
}