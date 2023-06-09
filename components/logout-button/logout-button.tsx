import { Pressable, Text } from "react-native";
import { styles } from "./styles";
import { useSetRecoilState } from "recoil";
import { authAtom, userAtom } from "atoms";
import { deleteItemAsync } from "expo-secure-store";
import { User } from "types/models";

const LogoutButton = () => {
	const setIsAuthenticated = useSetRecoilState<boolean>(authAtom);
	const setUser = useSetRecoilState<User>(userAtom);

	const onLogoutClick = async () => {
		await deleteItemAsync("auth-token");
		setUser({});
		setIsAuthenticated(false);
	};

	return (
		<Pressable style={styles.Button} onPress={onLogoutClick}>
			<Text style={styles.ButtonText}>Logout</Text>
		</Pressable>
	);
};

export default LogoutButton;
