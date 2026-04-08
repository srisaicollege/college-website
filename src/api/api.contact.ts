import api from "./axios";

export interface ContactInquiry {
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
}

export const sendInquiry = async (data: ContactInquiry) => {
    const response = await api.post("/contact", data);
    return response.data;
};
