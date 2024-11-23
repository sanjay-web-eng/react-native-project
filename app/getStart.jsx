import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Animated, { FadeInDown } from "react-native-reanimated";
import Img from "../assets/images/undraw_Celebrating_rtuv.png";
import { Link } from "expo-router";
export default function getStart() {
	return (
		<Animated.View entering={FadeInDown.duration(500)} style={style.container}>
			<Animated.Image entering={FadeInDown.duration(600)} style={style.Image} source={Img} />
			<Animated.Text entering={FadeInDown.duration(700)} style={style.textOne}>
				Congratulation
			</Animated.Text>
			<Animated.Text entering={FadeInDown.duration(700)} style={style.textTwo}>
				you successfully Log in{" "}
			</Animated.Text>
			<Link style={style.Link} href="/main_screen">
				<Animated.Text entering={FadeInDown.duration(800)} style={style.LinkText}>
					Enjoy
				</Animated.Text>
			</Link>
		</Animated.View>
	);
}
const style = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		display: "flex",
		backgroundColor: "#fff",
		gap: 10,
    padding:50,
	},
	Image: {
		height: 300,
		width: 300,
		objectFit: "contain",
	},
	textOne: {
		fontSize: 35,
		fontWeight: 500,
	},
	textTwo: {
		fontSize: 18,
	},
  Link:{
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
		marginTop: 30,
  },
  LinkText:{
    width: "100%",
    height: 50,
    textAlign:"center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color:"#fff"
  }
});
