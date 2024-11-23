import { View, Text , StyleSheet  ,ScrollView} from 'react-native'
import React from 'react'
import Animated, { FadeInDown } from "react-native-reanimated";

export default function pro() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
 <Text style={{padding:5,fontSize:30, fontWeight:500}}>Explore</Text>
     	<Animated.View
						entering={FadeInDown.duration(900)}
						style={styles.Box}
					></Animated.View>
          	<Animated.View
						entering={FadeInDown.duration(900)}
						style={styles.Box}
					></Animated.View>
          	<Animated.View
						entering={FadeInDown.duration(900)}
						style={styles.Box}
					></Animated.View>
          	<Animated.View
						entering={FadeInDown.duration(900)}
						style={styles.Box}
					></Animated.View>
          	<Animated.View
						entering={FadeInDown.duration(900)}
						style={styles.Box}
					></Animated.View>
          	<Animated.View
						entering={FadeInDown.duration(900)}
						style={styles.Box}
					></Animated.View>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
		flex: 1,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		padding: 10,
		backgroundColor: "#fff",
		color: "#000",
	},
  Box: {
		backgroundColor: "#ffff",
		width: "100%",
		height: 150,
		borderRadius: 10,
		borderWidth: 1,
		marginTop: 15,
		backgroundColor:"#3c5665"
	},
  scrollView: {
    flex: 1,
    width:"100%",
    height: "100%",
    padding:5
  }
})
