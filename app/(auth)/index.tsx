import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Button, SafeAreaView } from "react-native"
import { SignInStyles } from "styles";

const LoginScreen = () => {
    const router = useRouter();

    return (
        <SafeAreaView style={SignInStyles.screen} >
            <StatusBar style="dark" />
        </SafeAreaView>
    )
};

export default LoginScreen;
