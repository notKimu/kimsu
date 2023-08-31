import { apiWrapper } from "..";
import { endpoints } from "../defaults";
import type { PageDTO, PageResponseDTO } from "../dto";

export async function getPage(id: string) {
    const response = await apiWrapper(endpoints.pages + "/" + id, "GET", null);
    if (!response || !response.ok) return null;
    
    return await response.json() as PageResponseDTO;
}

export async function savePage(pageData: Object, token: string) {
    const response = await apiWrapper(endpoints.pages, "POST", pageData, token);
    if (!response || !response.ok) return false;
    
    return true;
}