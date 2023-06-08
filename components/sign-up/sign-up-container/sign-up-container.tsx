import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import { AuthButton, CustomTextInput } from "components/elements";
import { useMutation } from "react-query";
import { signUp } from "helpers";
import { setItemAsync } from "expo-secure-store";
import { useSetRecoilState } from "recoil";
import { authAtom } from "atoms";

interface Props {
	setIsSigningUp: Dispatch<SetStateAction<boolean>>;
}

const SignUpContainer = (props: Props) => {
	const { setIsSigningUp } = props;
	const setIsAuthenticated = useSetRecoilState<boolean>(authAtom);

	const [email, setEmail] = useState<string>("");
	const [name, setName] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const { isLoading: isSigningUp, mutate: signUpMutation } = useMutation("sign-up", signUp, {
		retry: 0,
		onError: (error) => {
			if (error instanceof Error) {
				console.log(error.message);
				return;
			}

			console.log("Internal Server Error!!");
		},
		onSuccess: async (data) => {
			const { token } = data;

			await setItemAsync("auth-token", token);
			setIsAuthenticated(true);
		},
	});

	const onSignUpClick = () => {
		if (isSigningUp) {
			console.log("Hold on!!");
			return;
		}

		signUpMutation({
			email,
			name,
			password,
		});
	};

	useEffect(() => {
		setIsSigningUp(isSigningUp);
	}, [isSigningUp]);

	return (
		<View style={styles.Container}>
			<Text style={styles.Title}>Get An Account</Text>
			<ScrollView style={styles.InputContainer}>
				<CustomTextInput value={email} onChangeText={setEmail} keyboardType="email-address" title="Email" />
				<CustomTextInput value={name} onChangeText={setName} keyboardType="default" title="Name" />
				<CustomTextInput value={password} onChangeText={setPassword} keyboardType="default" title="Password" />
			</ScrollView>
			<AuthButton buttonText="Sign Up" onPress={onSignUpClick} />
		</View>
	);
};

export default SignUpContainer;
