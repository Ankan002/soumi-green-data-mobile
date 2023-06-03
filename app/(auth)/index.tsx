import { AuthHeader } from "components/elements";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Button, SafeAreaView, View } from "react-native";
import { SignInStyles } from "styles";

const LoginScreen = () => {
	const router = useRouter();

	return (
		<SafeAreaView style={SignInStyles.screen}>
			<View style={SignInStyles.container}>
				<AuthHeader />
			</View>
			<StatusBar style="dark" />
		</SafeAreaView>
	);
};

export default LoginScreen;
