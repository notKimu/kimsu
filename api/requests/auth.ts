import { apiWrapper } from "..";
import { endpoints } from "../defaults";

export async function register(token: string) {
    const response = await apiWrapper(endpoints.register + token, "POST", null);
    if (response && response.ok) return true;
    return false;
}