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
            const response = await axiosInstance.get('table')
            setLoading(false)
            setTables(response?.data?.data?.table)
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