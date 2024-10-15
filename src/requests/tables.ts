import { useState } from "react"
import axiosInstance from "../config/axios"

export const useTables = () => {
    const [loading, setLoading] = useState(false)
    const [tables, setTables] = useState([])
    const [tableSection, setTableSection] = useState([])
    const [table, setTable] = useState([])

    const getTables = async () => {
        setLoading(true)
        try {
            const response = await axiosInstance.get('event')
            setLoading(false)
            setTables(response?.data?.data?.event)
        } catch (error) {
            setLoading(false)
            return error
        } finally {
            setLoading(false)
        }
    }

    const getTableSection = async () => {
        setLoading(true)
        try {
            const response = await axiosInstance.get('table-section')
            setTableSection(response?.data?.data?.section)
        } catch (error) {
            setLoading(false)
            return error
        } finally {
            setLoading(false)
        }
    }

    const getTableById = async (id: string | undefined) => {
        setLoading(true)
        try {
            const response = await axiosInstance.get(`table?tableSectionId=${id}`)
            setLoading(false)
            setTable(response?.data?.data?.table)
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
        getTables,
        getTableById,
        getTableSection,
        tableSection,
        tables,
        table,
        loading
    }
}

export default useTables;