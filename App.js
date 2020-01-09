import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import MainScreen from "./src/screens/MainScreen";
import { StyleSheet, View, Text } from "react-native";

const navigator = createStackNavigator(
  {
    Main: MainScreen
  },
  {
    initialRouteName: "Main",
    defaultNavigationOptions: {
      title: "Main Screen",
      headerStyle: {}
    }
  }
);

const AppContainer = createAppContainer(navigator);

export default () => (
  <View style={styles.container}>
    <AppContainer />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  }
});

// export default () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Welcome to Page 1</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   text: {
//     fontSize: 16
//   }
// });
