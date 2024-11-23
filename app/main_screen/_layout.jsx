import { View, Text } from "react-native";
import React from "react";
import { Tabs   ,Slot} from "expo-router";
export default function layout() {
	return (
		<>
	 
		<Tabs>
			<Tabs.Screen name="index" options={{ headerShown: false, title: "Home" }} />
			<Tabs.Screen name="pro" options={{ headerShown: false, title: "Explore" }} />
		</Tabs>
		</>
	);
}
