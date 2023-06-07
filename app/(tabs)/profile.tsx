import { MainHeader } from "components/elements";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { ProfileStyles } from "styles/profile";

export default function TabTwoScreen() {
	return (
		<SafeAreaView style={ProfileStyles.Container}>
			<MainHeader title="Profile" />
			<StatusBar style="dark" />
		</SafeAreaView>
	);
}
