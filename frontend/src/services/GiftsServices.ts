import axios from "axios";
import Present from "../models/Present";
import TargetMarket from "../models/TargetMarket";

export default class GiftsServices {
    async getTargetMarket(): Promise<TargetMarket[]> {
        const response = await axios.get<TargetMarket[]>(`${import.meta.env.VITE_REST_SERVER_URL}/gifts`)
        return response.data
    }
    async getPresents(id: string): Promise<Present[]> {
        const response = await axios.get<TargetMarket>(`${import.meta.env.VITE_REST_SERVER_URL}/gifts/${id}`)
        return response.data.present || []
}

    async deletePresent(id: string): Promise<boolean> {
        const response = await axios.delete<boolean>(`${import.meta.env.VITE_REST_SERVER_URL}/gifts/${id}`)
        return response.data
    }
}