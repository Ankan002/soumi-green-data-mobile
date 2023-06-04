import { View, Text, Pressable } from "react-native";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";

const LoginContainer = () => {
	return (
		<View style={styles.Container}>
			<Text style={styles.Title}>Let's Login</Text>
			<View style={styles.InputContainer}></View>
            <Pressable style={styles.LoginButton}>
                <Text style={styles.LoginText}>
                    Login
                </Text>
                <Ionicons name="ios-caret-forward" size={25} color="#62D783" />
            </Pressable>

            <Pressable style={styles.CreateAccountButton}>
                <Text style={styles.CreateAccountText}>
                    Create New Account
                </Text>
                <View style={styles.CreateAccountLogoContainer}>
                    <Ionicons name="ios-chevron-forward-outline" size={25} color="#000" />
                </View>
            </Pressable>
		</View>
	);
};

export default LoginContainer;
