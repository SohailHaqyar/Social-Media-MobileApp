import React, { useEffect } from "react";
import { ActivityIndicator, View, Text, StyleSheet } from "react-native";
import firebase from "firebase";
import Fire from "../Fire";

const Loading = ({ navigation }) => {
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      navigation.navigate(user ? "App" : "Auth");
    });
  }, []);
  return (
    <View style={styles.container}>
      <Text>Loading ...</Text>
      <ActivityIndicator size="large"></ActivityIndicator>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Loading;
