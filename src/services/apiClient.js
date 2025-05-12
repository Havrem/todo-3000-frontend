import { auth } from "../configs/firebase"

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const apiClient = async (endpoint, options = {}) => {
    const token = await auth.currentUser.getIdToken();

    const response = await fetch(`${BASE_URL}${endpoint}`, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...(options.headers || {}),
            ...(token && { Authorization: `Bearer ${token}`})
        }
    });

    if (!response.ok) {
        const contentType = response.headers.get("content-type");
        const errorBody = contentType?.includes("application/json")
          ? await response.json()
          : await response.text();
      
        throw new Error(`API error: ${response.status} - ${JSON.stringify(errorBody)}`);
    }

    if(response.status == 204) {
      return null;
    }

    const text = await response.text();
    return text ? JSON.parse(text) : null;
}