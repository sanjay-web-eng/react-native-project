import { Stack } from "expo-router";

export default function _layout() {
	return (
		<Stack>
			<Stack.Screen name="index" options={{ headerShown:       false       ,    headerTintColor: '#000', headerStyle:{backgroundColor:"#6C63FF",height:120 ,color:"#000" }} } />
			<Stack.Screen name="profile" options={{ headerShown:     false     ,    headerTintColor: '#000', headerStyle:{backgroundColor:"#6C63FF",height:120 ,color:"#000" }} } />
			<Stack.Screen name="sign" options={{ headerShown:        false        ,    headerTintColor: '#000', headerStyle:{backgroundColor:"#6C63FF",height:120 ,color:"#000" }} } />
			<Stack.Screen name="getStart" options={{ headerShown:    false    ,    headerTintColor: '#000', headerStyle:{backgroundColor:"#6C63FF",height:120 ,color:"#000" }} } />
			<Stack.Screen name="main_screen" options={{ headerShown: false ,    headerTintColor: '#000', headerStyle:{backgroundColor:"#6C63FF",height:120 ,color:"#000" }} } />
		</Stack>
	);
}
