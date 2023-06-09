import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Dimensions } from "react-native";
import { useQuery } from "react-query";
import { getUser } from "helpers";
import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { authAtom, userAtom, userLoadingAtom } from "atoms";
import { deleteItemAsync } from "expo-secure-store";
import { User } from "types/models";

export default function TabLayout() {
	const [isAuthenticated, setIsAuthenticated] = useRecoilState<boolean>(authAtom);
	const setUser = useSetRecoilState<User>(userAtom);
	const setIsProfileLoading = useSetRecoilState<boolean>(userLoadingAtom);
;
	const { refetch: getProfileQuery, isLoading: isProfileLoading } = useQuery("get-profile", getUser, {
		retry: 0,
		enabled: false,
		onSuccess: (data) => {
			console.log(data);
			setUser(data);
		},
		onError: async (error) => {
			console.log(error);
			await deleteItemAsync("auth-token");
			setIsAuthenticated(false);
		},
	});

	useEffect(() => {
		getProfileQuery();
	}, [isAuthenticated]);

	useEffect(() => {
		setIsProfileLoading(isProfileLoading);
	}, [isProfileLoading]);

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: "#000",
				tabBarInactiveTintColor: "#EBF0DE",
				tabBarShowLabel: false,
				tabBarStyle: {
					position: "absolute",
					width: "50%",
					alignSelf: "center",
					marginHorizontal:
						(Dimensions.get("screen").width - (50 / 100) * Dimensions.get("screen").width) / 2,
					marginBottom: 10,
					borderRadius: 20,
					borderWidth: 2,
					borderTopWidth: 2,
					alignItems: "center",
				}, // TODO: Re-Think Bottom Tab Navigator Styles...
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
					tabBarIcon: ({ color }) => <Ionicons name="home" size={30} color={color} />,
					headerShown: false,
				}}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					title: "Profile",
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons name="face-man-profile" color={color} size={30} />
					),
					headerShown: false,
				}}
			/>
		</Tabs>
	);
}
