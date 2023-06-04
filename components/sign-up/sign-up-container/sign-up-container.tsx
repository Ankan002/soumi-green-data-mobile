import { Dispatch, SetStateAction, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import { AuthButton, CustomTextInput } from "components/elements";

interface Props {
	isSigningUp: boolean;
	setIsSigningUp: Dispatch<SetStateAction<boolean>>;
}

const SignUpContainer = (props: Props) => {
	const { isSigningUp, setIsSigningUp } = props;

	const [email, setEmail] = useState<string>("");
	const [name, setName] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	return (
		<View style={styles.Container}>
			<Text style={styles.Title}>Get An Account</Text>
			<ScrollView style={styles.InputContainer}>
				<CustomTextInput value={email} onChangeText={setEmail} keyboardType="email-address" title="Email" />
				<CustomTextInput value={name} onChangeText={setName} keyboardType="default" title="Name" />
				<CustomTextInput value={password} onChangeText={setPassword} keyboardType="default" title="Password" />
			</ScrollView>
			<AuthButton buttonText="Sign Up" onPress={() => console.log("Sign Up!!")} />
		</View>
	);
};

export default SignUpContainer;
