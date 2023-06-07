import { ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack, useRouter } from "expo-router";
import { useEffect } from "react";
import { RecoilRoot, useRecoilValue } from "recoil";
import { SecularOne_400Regular } from "@expo-google-fonts/secular-one";
import {
	Quicksand_300Light,
	Quicksand_400Regular,
	Quicksand_500Medium,
	Quicksand_600SemiBold,
	Quicksand_700Bold,
} from "@expo-google-fonts/quicksand";
import {
	Manrope_200ExtraLight,
	Manrope_300Light,
	Manrope_400Regular,
	Manrope_500Medium,
	Manrope_600SemiBold,
	Manrope_700Bold,
	Manrope_800ExtraBold,
} from "@expo-google-fonts/manrope";
import { LightNavigationTheme } from "theme";
import { authAtom } from "atoms";

export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
	initialRouteName: "(auth)",
};

export default function RootLayout() {
	const [loaded, error] = useFonts({
		SecularOne_400Regular,
		Quicksand_300Light,
		Quicksand_400Regular,
		Quicksand_500Medium,
		Quicksand_600SemiBold,
		Quicksand_700Bold,
		Manrope_200ExtraLight,
		Manrope_300Light,
		Manrope_400Regular,
		Manrope_500Medium,
		Manrope_600SemiBold,
		Manrope_700Bold,
		Manrope_800ExtraBold,
	});

	useEffect(() => {
		if (error) throw error;
	}, [error]);

	return (
		<>
			{!loaded && <SplashScreen />}
			{loaded && (
				<RecoilRoot>
					<RootLayoutNav />
				</RecoilRoot>
			)}
		</>
	);
}

function RootLayoutNav() {
	const isAuthenticated = useRecoilValue<boolean>(authAtom);
	const router = useRouter();

	useEffect(() => {
		if (!isAuthenticated) {
			router.replace("(auth)");
		} else {
			router.replace("(tabs)");
		}
	}, [isAuthenticated]);

	return (
		<>
			<ThemeProvider value={LightNavigationTheme}>
				<Stack>
					<Stack.Screen name="(auth)" options={{ headerShown: false }} />
					<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
				</Stack>
			</ThemeProvider>
		</>
	);
}
