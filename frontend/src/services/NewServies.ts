import axios from "axios";
import Present from "../models/Present";

export default class NewServices {
    async addPresent(newGift: Present): Promise<Present> {
        const response = await axios.post<Present>(`${import.meta.env.VITE_REST_SERVER_URL}/new`, newGift)
        return response.data
    }
}