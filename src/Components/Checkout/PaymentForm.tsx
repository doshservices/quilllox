import { styles } from "../../utils/styles"
import { EventStoreTickets } from "../Cart/EventStoreTickets"
import { PaymentField } from "../Input/PaymentField"

export const PaymentForm = () => {
    return (
        <form>
            <section className='bg-[#2D2D2D] pt-4 px-4 text-white rounded-[4px]'>
                <h3 className='text-lg font-montserrat font-medium border-b-[#F8F8F81A] border-b-[1px] pb-1 mb-5'>Your Details</h3>
                <PaymentField
                    name=''
                    label='First Name'
                />
                <PaymentField
                    name=''
                    label='Last Name'
                />
                <PaymentField
                    name=''
                    label='Email Address'
                />
                <PaymentField
                    name=''
                    label='Comfirm Email Address'
                />
                <PaymentField
                    name=''
                    label='Phone Number'
                />
            </section>
            <section className='bg-[#2D2D2D] pt-4 px-4 text-white mt-4 rounded-[4px]'>
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
            </section>
            <EventStoreTickets />
            <button className={`${styles.primaryBtn} w-full mt-12 mb-8`}>Continue</button>
        </form>
    )
}