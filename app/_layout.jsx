import { Stack } from "expo-router";

export default function _layout() {
	return (
		<Stack>
			<Stack.Screen name="index" options={{ headerShown: false }} />
			<Stack.Screen name="profile" options={{ headerShown: false }} />
			<Stack.Screen name="sign" options={{ headerShown: false }} />
			<Stack.Screen name="getStart" options={{ headerShown: false }} />
			<Stack.Screen name="main_screen" options={{ headerShown: false }} />
		 

		</Stack>
	);
}
