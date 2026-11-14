import api from "./axios";

export const testBackend = async () => {
    try {
        const response = await api.get("/health/");
        console.log("Backend Connected:", response.data);
        return response.data;
    } catch (error) {
        console.error("Backend Error:", error);
        throw error;
    }
};