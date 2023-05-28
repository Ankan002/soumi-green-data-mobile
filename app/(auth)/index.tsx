import { useRouter } from "expo-router";
import { Button, SafeAreaView } from "react-native"

const LoginScreen = () => {
    const router = useRouter();

    return (
        <SafeAreaView style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white"
        }} >
            <Button title="Change Screen" onPress={() => router.push("/sign-up")} />
        </SafeAreaView>
    )
};

export default LoginScreen;
