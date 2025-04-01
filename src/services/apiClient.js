import { auth } from "../configs/firebase"

// const BASE_URL = 'https://todo-3000.onrender.com'
const BASE_URL = 'http://localhost:8080'

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

    return response.json();
}