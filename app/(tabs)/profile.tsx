import { MainHeader } from "components/elements";
import { ProfileSection } from "components/profile";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { ProfileStyles } from "styles/profile";

export default function TabTwoScreen() {
	return (
		<SafeAreaView style={ProfileStyles.Container}>
			<MainHeader title="Profile" />
			<ProfileSection />
			<StatusBar style="dark" />
		</SafeAreaView>
	);
}
