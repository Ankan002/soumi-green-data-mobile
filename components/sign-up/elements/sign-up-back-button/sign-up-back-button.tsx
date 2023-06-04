import { Pressable } from "react-native";
import { styles } from "./styles";
import { Entypo } from "@expo/vector-icons";
import { useRouter } from "expo-router";

interface Props {
	isLoading: boolean;
}

const SignUpBackButton = (props: Props) => {
	const { isLoading } = props;
	const router = useRouter();

	const onBackClick = () => {
		if (isLoading) return;

		router.back();
	};

	return (
		<Pressable style={styles.Button} onPress={onBackClick}>
			<Entypo name="chevron-left" size={20} />
		</Pressable>
	);
};

export default SignUpBackButton;
