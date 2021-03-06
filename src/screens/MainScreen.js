// @generated: @expo/next-adapter@2.0.0-beta.11
import React from "react";
import SharedComponent from "../components/shared-compoonent";
import { StyleSheet, Text, View } from "react-native";

export default () => {
  return (
    <View style={styles.container}>
      <SharedComponent />
      <Text style={styles.text}>Welcome to the main page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 16
  }
});
