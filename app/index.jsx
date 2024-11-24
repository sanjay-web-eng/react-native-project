import { View, Text, Image, StyleSheet, Platform, StatusBar } from "react-native";
import React, { useEffect, useState } from "react";
import Animated, { FadeInDown } from "react-native-reanimated";
import Img from "../assets/images/undraw_welcome_cats_thqn.png";
import { Link } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

export default function index_two() {
	useEffect(() => {
		async function SplashScreen() {
			try {
				await SplashScreen.preventAutoHideAsync();
				await new Promise((resolve) => {
					setTimeout(resolve, 2000);
				});
			} finally {
				SplashScreen.hideAsync();
			}
		}
		SplashScreen();
	}, []);
	return (
		<View style={style.container}>
			<StatusBar backgroundColor={"#fff"} barStyle={"dark-content"} />
			<Animated.View entering={FadeInDown.duration(300)} style={style.button}>
				<Image source={Img} style={style.img} />
				<Text style={style.text}>welcome to our app</Text>
				<Link style={style.link} href="/profile">
					let's start
				</Link>
			</Animated.View>
		</View>
	);
}

const style = StyleSheet.create({
	container: {
		height: Platform.OS === "ios" ? "80%" : "90%",
		display: "flex",
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#fff",
	},
	img: {
		width: 390,
		height: 290,
		objectFit: "contain",
	},
	text: {
		fontSize: 35,
		fontWeight: 500,
		color: "#6C63FF",
		marginBottom: 50,
	},
	link: {
		backgroundColor: "#6C63FF",
		display: "flex",
		justifyContent: "center",
		paddingLeft: 110,
		paddingRight: 110,
		paddingTop: 12,
		paddingBottom: 12,
		alignContent: "center",
		borderRadius: 10,
		fontSize: 25,
		fontWeight: 500,
		color: "#fff",
	},
	button: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
});
