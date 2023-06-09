import { MainHeader } from "components/elements";
import { LogoutButton } from "components";
import { ProfileSection } from "components/profile";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { ProfileStyles } from "styles/profile";
import { useRecoilValue } from "recoil";
import { userLoadingAtom } from "atoms";

export default function ProfileScreen() {
	const isUserProfileLoading = useRecoilValue<boolean>(userLoadingAtom);

	return (
		<SafeAreaView style={ProfileStyles.Container}>
			<MainHeader title="Profile" />
			{!isUserProfileLoading && (
				<>
					<ProfileSection />
					<LogoutButton />
				</>
			)}
			<StatusBar style="dark" />
		</SafeAreaView>
	);
}
