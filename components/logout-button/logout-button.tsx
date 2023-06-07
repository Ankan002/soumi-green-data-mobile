import { Pressable, Text } from "react-native";
import { styles } from "./styles";
import { useSetRecoilState } from "recoil";
import { authAtom } from "atoms";

const LogoutButton = () => {
	const setIsAuthenticated = useSetRecoilState<boolean>(authAtom);

	const onLogoutClick = () => {
		setIsAuthenticated(false);
	};

	return (
		<Pressable style={styles.Button} onPress={onLogoutClick}>
			<Text style={styles.ButtonText}>Logout</Text>
		</Pressable>
	);
};

export default LogoutButton;
