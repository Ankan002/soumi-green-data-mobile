import { Dispatch, SetStateAction } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { AuthButton } from "components/elements";

interface Props {
	isSigningUp: boolean;
	setIsSigningUp: Dispatch<SetStateAction<boolean>>;
}

const SignUpContainer = (props: Props) => {
	const { isSigningUp, setIsSigningUp } = props;

	return (
		<View style={styles.Container}>
			<Text style={styles.Title}>Get An Account</Text>
			<View style={styles.InputContainer}></View>
			<AuthButton buttonText="Sign Up" onPress={() => console.log("Sign Up!!")} />
		</View>
	);
};

export default SignUpContainer;
