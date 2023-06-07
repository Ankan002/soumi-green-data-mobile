import { View, Text, Pressable, ScrollView } from "react-native";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { AuthButton, CustomTextInput } from "components/elements";
import { useRouter } from "expo-router";
import { useState } from "react";
import { colors } from "constants/colors";

const LoginContainer = () => {
	const router = useRouter();

	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

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
			<AuthButton buttonText="Login" onPress={() => router.replace("(tabs)")} />

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
