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

    const createReservation = async (payload: ReservationPayload) => {

        setLoading(true)
        try {
            await axiosInstance.post('reservation', {
                ...payload
            })
            toast.success('Reservation Succesful')
            setLoading(false)
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
        loading
    }
}

export default useReservation;