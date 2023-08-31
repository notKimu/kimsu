import { apiWrapper } from "..";
import { endpoints } from "../defaults";

export async function saveBackground(base64Image: string, token: string) {
    const imageObject = {
        background: base64Image,
    };

    const response = await apiWrapper(endpoints.background, "POST", imageObject, token);
    if (response && response.ok) return true;
    return false;
}