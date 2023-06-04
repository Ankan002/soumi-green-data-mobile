import { GestureResponderEvent, Pressable, Text } from "react-native";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";

interface Props {
	buttonText: string;
	onPress: (e: GestureResponderEvent) => void;
}

const AuthButton = (props: Props) => {
	const { buttonText, onPress } = props;

	return (
		<Pressable style={styles.LoginButton} onPress={onPress}>
			<Text style={styles.LoginText}>{buttonText}</Text>
			<Ionicons name="ios-caret-forward" size={25} color="#62D783" />
		</Pressable>
	);
};

export default AuthButton;
