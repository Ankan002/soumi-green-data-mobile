import axios, { Axios, AxiosError } from "axios";
import Constants from "expo-constants";
import { z } from "zod";

const ArgsSchema = z.object({
	email: z.string().email("Enter a valid email address"),
	password: z
		.string()
		.min(8, "Name should have at least 8 characters")
		.max(30, "Name should have at most 30 characters"),
});

type Args = z.infer<typeof ArgsSchema>;

export const signIn = async (args: Args) => {
	const validationResult = ArgsSchema.safeParse(args);

	if (!validationResult.success) {
		throw new Error(validationResult.error.errors[0]?.message);
	}

	try {
		const response = await axios.post(`${Constants.manifest?.extra?.api_endpoint}/auth/sign-in`, {
			email: validationResult.data.email,
			password: validationResult.data.password,
		});

		if (!response.data.success) {
			throw new Error(response.data.error);
		}

		return {
			token: response.headers["auth-token"],
		};
	} catch (error) {
        if (error instanceof AxiosError) {
            throw new Error(error.response?.data.error);
        }

		if (error instanceof Error) {
			throw new Error(error.message);
		}

		throw new Error("Internal Server Error!!");
	}
};
