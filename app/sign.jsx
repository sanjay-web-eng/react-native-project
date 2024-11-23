import { View, Text, Image, Platform, StyleSheet, ScrollView, TextInput } from "react-native";
import React from "react";
import Img2 from "../assets/images/undraw_Access_account_re_8spm.png";
import { Link } from "expo-router";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function sign() {
	return (
		<View style={style.papa}>
			<ScrollView style={style.scroll}>
				<View style={style.con}>
					<Animated.Image
						entering={FadeInDown.duration(600)}
						source={Img2}
						style={style.img}
					/>
					<Animated.View entering={FadeInDown.duration(700)} style={style.text}>
						<Text style={style.txt_one}>Register</Text>
						<Text style={style.txt_two}>Please register to login </Text>
					</Animated.View>
					<Animated.View entering={FadeInDown.duration(800)} style={style.input}>
						<TextInput inputMode="text" style={style.username} placeholder="Username" />
						<TextInput
							inputMode="numeric"
							style={style.moblieNum}
							placeholder="Moblie Number"
						/>
						<TextInput inputMode="text" style={style.password} placeholder="Password" />
						<Link style={style.link} href="/getStart">
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
					</Animated.View>
					<Text style={style.acc}>
						Already have account ?{" "}
						<Link style={style.signIn} href="/profile">
							Sign in
						</Link>
					</Text>
				</View>
			</ScrollView>
		</View>
	);
}

const style = StyleSheet.create({
	papa: {
		flex: 1,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#fff",
	},
	con: {
		width: "100%",
		height: Platform.OS === "ios" ? "91%" : "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	scroll: {
		flex: 1,
		width: "100%",
		padding: Platform.OS === "ios" ? 20 : 15,
		marginTop: Platform.OS === "ios" ? 40 : 35,
	},
	img: {
		height: 245,
		width: 330,
		objectFit: "contain",
	},
	text: {
		width: "100%",
		padding: 15,
	},
	txt_one: {
		fontSize: 35,
		fontWeight: 500,
		color: "#6C63FF",
	},
	txt_two: {
		fontSize: 18,
		fontWeight: 400,
		color: "#6C63FF",
	},
	input: {
		width: "100%",
		padding: 8,
		display: "flex",
		justifyContent: "center",
        alignItems:"center"
	},
	username: {
		backgroundColor: "#cbc9f2",
		height: 50,
		width: "100%",
		borderRadius: 14,
		paddingLeft: 14,
		fontSize: 18,
		marginBottom: 20,
	},
	moblieNum: {
		backgroundColor: "#cbc9f2",
		height: 50,
		width: "100%",
		borderRadius: 14,
		paddingLeft: 14,
		fontSize: 18,
		marginBottom: 20,
	},
	password: {
		backgroundColor: "#cbc9f2",
		height: 50,
		width: "100%",
		borderRadius: 14,
		paddingLeft: 14,
		fontSize: 18,
		marginBottom: 20,
	},
	link: {
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
		marginTop: 3,
	},
	acc: {
		fontSize: 17,
		color: "#888",
	},
	signIn: {
		color: "#6C63FF",
		fontWeight: 700,
	},
});
