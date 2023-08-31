import { apiWrapper } from "..";
import { endpoints } from "../defaults";
import type { UpdateUserDTO, UserDTO } from "../dto";

export async function getMe(token: string) {
    const response = await apiWrapper(endpoints.me, "GET", null, token);
    if (!response || !response.ok) return null;
    
    const userData: UserDTO = await response.json();
    return userData;
}

export async function updateUser(newUser: UpdateUserDTO, token: string) {
    const response = await apiWrapper(endpoints.me, "POST", newUser, token);
    if (!response || !response.ok) return false;
    
    return true;
}