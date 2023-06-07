import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Dimensions } from "react-native";

export default function TabLayout() {
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
					tabBarIcon: ({ color }) => <MaterialCommunityIcons name="face-man-profile" color={color} size={30} />,
					headerShown: false,
				}}
			/>
		</Tabs>
	);
}
