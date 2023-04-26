import api from "@/api/api";
import type Bill from "@/models/Bill";

export default class BillService {
    static getPendingRecent = async (): Promise<Bill[]> => {
        try {
            const response = await api.get("/bill/pending/recent");

            return response.data;
        } catch (error: any) {
            if (error.response.data.message) {
                throw new Error(error.response.data.message);
            }

            switch (error.response.status) {
                case 401:
                    throw new Error("Unauthorized");
                case 404:
                    throw new Error("User not found");
                case 500:
                    throw new Error("Server error");
                default:
                    throw new Error(`Unknown error (${error.message})}`);
            }
        }
    };

    static getTotalRepayment = async (): Promise<number> => {
        try {
            const response = await api.get("/bill/total/repayment");

            return response.data.value;
        } catch (error: any) {
            if (error.response.data.message) {
                throw new Error(error.response.data.message);
            }

            switch (error.response.status) {
                case 401:
                    throw new Error("Unauthorized");
                case 404:
                    throw new Error("User not found");
                case 500:
                    throw new Error("Server error");
                default:
                    throw new Error(`Unknown error (${error.message})}`);
            }
        }
    };

    static getTotalOwed = async (): Promise<number> => {
        try {
            const response = await api.get("/bill/total/owed");

            return response.data.value;
        } catch (error: any) {
            if (error.response.data.message) {
                throw new Error(error.response.data.message);
            }

            switch (error.response.status) {
                case 401:
                    throw new Error("Unauthorized");
                case 404:
                    throw new Error("User not found");
                case 500:
                    throw new Error("Server error");
                default:
                    throw new Error(`Unknown error (${error.message})}`);
            }
        }
    };
}
