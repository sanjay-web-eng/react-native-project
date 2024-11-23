import {
	View,
	Text,
	StyleSheet,
	TextInput,
	FlatList,
	Image,
	ScrollView,
	Platform,
	ActivityIndicator,
	Button,
} from "react-native";
import { useState, useEffect } from "react";
import Img from "../../assets/images/undraw_Celebrating_rtuv.png";
import Animated, { FadeInDown } from "react-native-reanimated";
export default function index() {
	const [londing, setLonding] = useState(false);
	 
	let a = 0;
	const data = [
		{
			id: 1,
			name: "Margherita Pizza",
			price: 8.99,
			photo: Img,
		},
		{
			id: 2,
			name: "Cheeseburger",
			price: 6.49,
			photo: Img,
		},
		{
			id: 3,
			name: "Caesar Salad",
			price: 5.99,
			photo: Img,
		},
		{
			id: 4,
			name: "Chicken Biryani",
			price: 10.99,
			photo: Img,
		},
		{
			id: 5,
			name: "Sushi Platter",
			price: 12.49,
			photo: Img,
		},
		{
			id: 6,
			name: "Chocolate Cake",
			price: 4.99,
			photo: Img,
		},
		{
			id: 7,
			name: "Chicken Sandwich",
			price: 7.49,
			photo: Img,
		},
		{
			id: 8,
			name: "Spaghetti Bolognese",
			price: 9.99,
			photo: Img,
		},
		{
			id: 9,
			name: "Tandoori Chicken",
			price: 11.49,
			photo: Img,
		},
		{
			id: 10,
			name: "Veggie Wrap",
			price: 5.99,
			photo: Img,
		},
		{
			id: 11,
			name: "Fish Tacos",
			price: 8.99,
			photo: Img,
		},
		{
			id: 12,
			name: "Pancakes",
			price: 4.49,
			photo: Img,
		},
		{
			id: 13,
			name: "Pepperoni Pizza",
			price: 9.49,
			photo: Img,
		},
		{
			id: 14,
			name: "Beef Steak",
			price: 15.99,
			photo: Img,
		},
		{
			id: 15,
			name: "Vegetable Stir-fry",
			price: 7.99,
			photo: Img,
		},
		{
			id: 16,
			name: "Mango Smoothie",
			price: 3.99,
			photo: Img,
		},
	];

	return (
		<Animated.View
			entering={FadeInDown.duration(600)}
			style={{
				flex: 1,
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				padding: 10,
				backgroundColor: color,
				color: text,
			}}
		>
			<ScrollView style={{ flex: 1, display: "flex" }}>
				<Animated.Text entering={FadeInDown.duration(700)} style={style.mText}>
					Home
				</Animated.Text>
				<Animated.View entering={FadeInDown.duration(800)} style={style.search}>
					<TextInput placeholder="search" style={style.searchText} />
				</Animated.View>
				<View style={{ flex: 1, width: "100%", padding: 5 }}>
					<Animated.View
						entering={FadeInDown.duration(900)}
						style={style.Box}
					></Animated.View>
					<Animated.View
						style={{ height: 215, marginLeft: 0 }}
						entering={FadeInDown.duration(1000)}
					>
						{londing ? (
							<ActivityIndicator color="#000" size={30} />
						) : (
							<FlatList
								data={data}
								renderItem={({ item }) => {
									return (
										<View style={style.data} key={item.id}>
											<Image
												style={{
													height: 130,
													width: 180,
													objectFit: "contain",
												}}
												source={item.photo}
											/>
											<Text style={{ fontSize: 20, fontWeight: 500 }}>
												{item.name}
											</Text>
											<Text style={{ fontSize: 15 }}>${item.price}</Text>
										</View>
									);
								}}
								keyExtractor={(item) => item.id.toString()}
								horizontal={true}
							/>
						)}
					</Animated.View>
					<Animated.View
						entering={FadeInDown.duration(900)}
						style={style.Box}
					></Animated.View>
					<Animated.View
						entering={FadeInDown.duration(900)}
						style={style.Box}
					></Animated.View>
					<Animated.View
						entering={FadeInDown.duration(900)}
						style={style.Box}
					></Animated.View>
					<Animated.View entering={FadeInDown.duration(900)} style={style.Box}>
						 
					</Animated.View>
					<View style={{ backgroundColor: color, height: 100 }}></View>
				</View>
			</ScrollView>
		</Animated.View>
	);
}

const style = StyleSheet.create({
	container: {},
	mText: {
		fontSize: 25,
		fontWeight: 600,
		marginTop: 20,
		padding: 5,
	},
	search: {
		width: "100%",
		height: 60,
		display: "flex",
		justifyContent: "center",
		padding: 5,
		position: "static",
		top: 0,
	},
	searchText: {
		height: 50,
		backgroundColor: "#f2f3f5",
		borderColor: "#999",
		borderWidth: 1,
		borderRadius: 10,
		fontSize: 18,
		paddingLeft: 12,
		paddingRight: 12,
		marginTop: 20,
	},
	data: {
		borderWidth: 1,
		height: 200,
		width: 200,
		marginLeft: 5,
		marginTop: 15,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 10,
		color: "#fff",
	},
	Box: {
		backgroundColor: "#ffff",
		width: "100%",
		height: 150,
		borderRadius: 10,
		borderWidth: 1,
		marginTop: 15,
	},
});
