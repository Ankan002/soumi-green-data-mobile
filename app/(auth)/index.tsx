import { AuthHeader } from "components/elements";
import { LoginContainer } from "components/login";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Button, SafeAreaView, View } from "react-native";
import { SignInStyles } from "styles";

const LoginScreen = () => {
	const router = useRouter();

	return (
		<SafeAreaView style={SignInStyles.Screen}>
			<View style={SignInStyles.Container}>
				<AuthHeader />
				<LoginContainer />
			</View>
			<StatusBar style="dark" />
		</SafeAreaView>
	);
};

export default LoginScreen;
