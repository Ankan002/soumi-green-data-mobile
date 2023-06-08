import { View, Text, Pressable, ScrollView } from "react-native";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { AuthButton, CustomTextInput } from "components/elements";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { colors } from "constants/colors";
import { useSetRecoilState } from "recoil";
import { authAtom } from "atoms";
import { useMutation } from "react-query";
import { signIn } from "helpers";
import { setItemAsync } from "expo-secure-store";

const LoginContainer = () => {
	const router = useRouter();

	const setIsAuthenticated = useSetRecoilState<boolean>(authAtom);
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const { isLoading, mutate: signInMutation } = useMutation("sign-in", signIn, {
		onSuccess: async (data) => {
			const { token } = data;

			await setItemAsync("auth-token", token);
			setIsAuthenticated(true);
		},
		onError: (error) => {
			if (error instanceof Error) {
				console.log(error.message);
				return;
			}

			console.log("Internal Server Error");
			return;
		},
		retry: 0,
	});

	const onLoginClick = async () => {
		if (isLoading) {
			console.log("Signing In!!");
			return;
		}

		signInMutation({
			email,
			password,
		});
	};

	const onCreateAccountButtonClick = () => {
		router.push("/(auth)/sign-up");
	};

	return (
		<View style={styles.Container}>
			<Text style={styles.Title}>Let's Login</Text>
			<ScrollView style={styles.InputContainer}>
				<CustomTextInput value={email} onChangeText={setEmail} title="Email" keyboardType="email-address" />
				<CustomTextInput value={password} onChangeText={setPassword} title="Password" keyboardType="default" />
			</ScrollView>
			<AuthButton buttonText="Login" onPress={onLoginClick} />

			<Pressable style={styles.CreateAccountButton} onPress={onCreateAccountButtonClick}>
				<Text style={styles.CreateAccountText}>Create New Account</Text>
				<View style={styles.CreateAccountLogoContainer}>
					<Ionicons name="ios-chevron-forward-outline" size={25} color={colors.black} />
				</View>
			</Pressable>
		</View>
	);
};

export default LoginContainer;
