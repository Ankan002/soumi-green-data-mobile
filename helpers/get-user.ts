import axios, { AxiosError } from "axios";
import { getItemAsync } from "expo-secure-store";
import Constants from "expo-constants";
import { z } from "zod";

const ResponseSchema = z.object({
	name: z.string(),
	email: z.string().email(),
	id: z.string(),
});

export const getUser = async () => {
	const authToken = await getItemAsync("auth-token");

	try {
		const response = await axios.get(`${Constants.manifest?.extra?.api_endpoint}/user`, {
			headers: {
				"auth-token": authToken,
			},
		});

		if (!response.data.success) {
			throw new Error(response.data.error);
		}

		const validationResult = ResponseSchema.safeParse(response.data.data.user);

		if (!validationResult.success) {
			throw new Error(validationResult.error.errors[0].message);
		}

		return {
			...validationResult.data,
		};
	} catch (error) {
		if (error instanceof AxiosError) {
			throw new Error(error.response?.data?.error);
		}

		if (error instanceof Error) {
			throw new Error(error.message);
		}

		throw new Error("Internal Server Error");
	}
};
