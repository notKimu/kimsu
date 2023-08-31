import { endpoints } from "./defaults";

export async function apiWrapper(url: string, method: "GET" | "POST", body: Object | null, token?: string): Promise<Response | null> {
    try {
        const response = await fetch(endpoints.mount + url, {
            method: method,
            body: body ? JSON.stringify(body) : null,
            headers: {
                "Authorization": token ?? "",
            },
            credentials: "include"
        });
    
        return response.ok ? response : null;
    } catch (error) {
        return null;
    }
}