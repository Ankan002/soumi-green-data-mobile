import { MainHeader } from "components/elements";
import { LogoutButton } from "components";
import { ProfileSection } from "components/profile";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { ProfileStyles } from "styles/profile";

export default function TabTwoScreen() {
	return (
		<SafeAreaView style={ProfileStyles.Container}>
			<MainHeader title="Profile" />
			<ProfileSection />
			<LogoutButton />
			<StatusBar style="dark" />
		</SafeAreaView>
	);
}
