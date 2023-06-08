import { Pressable, Text } from "react-native";
import { styles } from "./styles";
import { useSetRecoilState } from "recoil";
import { authAtom } from "atoms";
import { deleteItemAsync } from "expo-secure-store";

const LogoutButton = () => {
	const setIsAuthenticated = useSetRecoilState<boolean>(authAtom);

	const onLogoutClick = async () => {
		await deleteItemAsync("auth-token");
		setIsAuthenticated(false);
	};

	return (
		<Pressable style={styles.Button} onPress={onLogoutClick}>
			<Text style={styles.ButtonText}>Logout</Text>
		</Pressable>
	);
};

export default LogoutButton;
