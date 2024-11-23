import { View, Text, StyleSheet, Image, TextInput, ScrollView, Platform } from "react-native";
import React from "react";
import IoginImg from "../assets/images/undraw_Mobile_login_re_9ntv.png";
import Animated, { FadeInDown } from "react-native-reanimated";
import { Link } from "expo-router";
export default function login() {
	return (
		<View style={style.container}>
			<ScrollView style={style.scroll}>
				<Animated.Image
					entering={FadeInDown.duration(600)}
					source={IoginImg}
					style={style.img}
				/>
				<Animated.View entering={FadeInDown.duration(700)} style={style.viewLog}>
					<Text style={style.viewText}>Login </Text>
					<Text style={style.viewPer}>Please Sign in to continue</Text>
				</Animated.View>
				<Animated.View entering={FadeInDown.duration(800)} style={style.texta}>
					<TextInput inputMode="text" placeholder="Username" style={style.username} />
					<TextInput inputMode="text" placeholder="Password" style={style.password} />
					<Link style={style.Link} href="/index">
						<Text
							style={{
							 
								width: "100%",
								height: 50,
								textAlign:"center",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								color:"#fff"
							}}
						>
							Sign in
						</Text>
					</Link>
					<Text style={style.acc}>
						Don't have account ?{" "}
						<Link style={style.sign} href="/sign">
							Sign Up
						</Link>
					</Text>
				</Animated.View>
			</ScrollView>
		</View>
	);
}
const style = StyleSheet.create({
	container: {
		flex: 1,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#fff",
	},
	animated: {
		height: "70%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#fff",
	},
	img: {
		width: 330,
		height: 220,
		objectFit: "contain",
	},
	scroll: {
		flex: 1,
		width: "100%",
		padding: Platform.OS === "ios" ? 20 : 15,
		marginTop: Platform.OS === "ios" ? 40 : 35,
	},
	viewLog: {
		width: "100%",

		padding: 15,
		height: "20%",
		justifyContent: "center",
	},
	viewText: {
		fontSize: 35,
		fontWeight: 500,
		color: "#6C63FF",
	},
	viewPer: {
		fontSize: 18,
		fontWeight: 400,
		color: "#6C63FF",
	},
	texta: {
		display: "flex",

		alignItems: "center",
		height: "60%",
		padding: 8,
	},
	username: {
		borderRadius: 14,
		paddingLeft: 14,
		fontSize: 18,
		width: "100%",
		height: 50,
		backgroundColor: "#cbc9f2",
		marginBottom: 20,
	},
	password: {
		borderRadius: 14,
		paddingLeft: 14,
		fontSize: 18,
		width: "100%",
		height: 50,
		backgroundColor: "#cbc9f2",
	 
	},
	Link: {
		backgroundColor: "#6C63FF",
		display: "flex",
		justifyContent: "center",
		paddingLeft: 1,
		paddingRight: 1,
		paddingTop: 10,
		paddingBottom: 10,
		width: "100%",
		height: 50,
		alignContent: "center",
		borderRadius: 10,
		fontSize: 20,
		fontWeight: 500,
	  color:"#fff",
		marginTop: 20,
	},
	acc: {
		marginTop: 20,
		fontSize: 17,
		color: "#888",
	},
	sign: {
		color: "#6C63FF",
		fontWeight: 700,
	},
});
