import { AuthHeader } from "components/elements";
import { SignUpBackButton } from "components/sign-up/elements";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView, View } from "react-native";
import { SignUpStyles } from "styles/sign-up";

const LoginScreen = () => {
	const [isSigningUp, setIsSigningUp] = useState<boolean>(false);

	return (
		<SafeAreaView style={SignUpStyles.Screen}>
			<View style={SignUpStyles.NavigationButtonContainer}>
				<SignUpBackButton isLoading={isSigningUp} />
			</View>
			<StatusBar style="dark" />
			<View style={SignUpStyles.Container}>
				<AuthHeader />
			</View>
		</SafeAreaView>
	);
};

export default LoginScreen;
