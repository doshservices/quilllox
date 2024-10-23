import { useState } from "react"
import axiosInstance from "../config/axios"
import toast from "react-hot-toast"

type ReservationPayload = {
    username: string
    email: string
    table: string
    event: string
    amount: number
    date: string
}

export const useReservation = () => {
    const [loading, setLoading] = useState(false)
    const [reservationId, setReservationId] = useState<string>()

    const markAsPaid = async (id: string) => {
        try {
            await axiosInstance.patch(`reservation/mark-as-paid?reservationId=671917ec0b85ed4953ccc556`)
            toast.success('Payment Succesful')
        } catch (error) {
            console.log(error);
            toast.error('Unable to verify payment')
            return error
        }
    }

    const createReservation = async (payload: ReservationPayload, payment: () => void) => {

        setLoading(true)
        try {
            const res = await axiosInstance.post('reservation', {
                ...payload
            })
            if (res?.data?.data) {
                setReservationId(res?.data?.data?.reservation?._id)
                toast.success('Reservation Succesful')
                payment()
                setLoading(false)
            }
        } catch (error) {
            console.log(error);
            toast.error('Unable to make reservation at the moment')
            setLoading(false)
            return error
        } finally {
            setLoading(false)
        }
    }

    return {
        createReservation,
        reservationId,
        markAsPaid,
        loading
    }
}

export default useReservation;