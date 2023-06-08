import { getItemAsync } from "expo-secure-store"

export const verifyIsAuthenticated = async(): Promise<boolean> => {
    const authToken = await getItemAsync("auth-token");

    if(!authToken) return false;

    return true
}