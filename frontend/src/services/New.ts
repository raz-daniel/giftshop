import axios from "axios";
import Present from "../models/Present";

export default class New {
    async addPresent(draft: Present): Promise<Present> {
        const response = await axios.post<Present>(`${import.meta.env.VITE_REST_SERVER_URL}/new`, draft)
        return response.data
    }
}