import { SignUpBackButton } from "components/sign-up/elements";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView } from "react-native"
import { SignUpStyles } from "styles/sign-up";

const LoginScreen = () => {
    const [isSigningUp, setIsSigningUp] = useState<boolean>(false);

    return (
        <SafeAreaView style={SignUpStyles.Screen}>
            <SignUpBackButton isLoading={isSigningUp} />
            <StatusBar style="dark" />
        </SafeAreaView>
    )
};

export default LoginScreen;