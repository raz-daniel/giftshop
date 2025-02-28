import axios from "axios";
import Present from "../models/Present";

export default class Gifts {
    async getPresents(id: string): Promise<Present[]> {
        const response = await axios.get<Present[]>(`${import.meta.env.VITE_REST_SERVER_URL}/gifts/${id}`)
        return response.data
}

    async deletePresent(id: string): Promise<boolean> {
        const response = await axios.delete<boolean>(`${import.meta.env.VITE_REST_SERVER_URL}/gifts/${id}`)
        return response.data
    }
}