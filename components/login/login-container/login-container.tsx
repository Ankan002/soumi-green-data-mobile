import { View, Text, Pressable } from "react-native";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { AuthButton } from "components/elements";
import { useRouter } from "expo-router";

const LoginContainer = () => {
	const router = useRouter();

	const onCreateAccountButtonClick = () => {
		router.push("/(auth)/sign-up");
	};

	return (
		<View style={styles.Container}>
			<Text style={styles.Title}>Let's Login</Text>
			<View style={styles.InputContainer}></View>
			<AuthButton buttonText="Login" onPress={() => console.log("login!!")} />

			<Pressable style={styles.CreateAccountButton} onPress={onCreateAccountButtonClick}>
				<Text style={styles.CreateAccountText}>Create New Account</Text>
				<View style={styles.CreateAccountLogoContainer}>
					<Ionicons name="ios-chevron-forward-outline" size={25} color="#000" />
				</View>
			</Pressable>
		</View>
	);
};

export default LoginContainer;
