import { useState } from "react"
import axiosInstance from "../config/axios"
import { IEvent } from "../utils/interface"

export const useEvents = () => {
    const [loading, setLoading] = useState(false)
    const [events, setEvents] = useState([])
    const [event, setEvent] = useState<IEvent>()

    const getEvents = async () => {
        setLoading(true)
        try {
            const response = await axiosInstance.get('event')
            setLoading(false)
            setEvents(response?.data?.data?.event)
        } catch (error) {
            setLoading(false)
            return error
        } finally {
            setLoading(false)
        }
    }

    const getEventById = async (id: string | undefined) => {
        setLoading(true)
        try {
            const response = await axiosInstance.get(`event/${id}`)
            setLoading(false)
            setEvent(response?.data?.data?.event)
        } catch (error) {
            setLoading(false)
            return error
        } finally {
            setLoading(false)
        }
    }

    // const sign_up = async (payload: SignUpPayload, gender: string, address: string) => {
    //     setLoading(true)

    //     const data = {
    //         ...payload,
    //         role: 'USER',
    //         isGoogleSigned: false,
    //         gender,
    //         address
    //     }

    //     try {
    //         const response = await axiosInstance.post('user/register', data)
    //         toast.success('Registeration Succesful! A one time password has been sent to your mail')
    //         setLoading(false)
    //         dispatch(setVerificationMail(response?.data?.data?.newUser?.email))
    //         setTimeout(() => {
    //             navigate('/verify-user')
    //         }, 2000)
    //     } catch (error) {
    //         setLoading(false)
    //     } finally {
    //         setLoading(false)
    //     }
    // }

    return {
        getEvents,
        getEventById,
        events,
        event,
        loading
    }
}

export default useEvents;