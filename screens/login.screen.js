import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  StatusBar,
  LayoutAnimation,
} from "react-native";
import firebase from "firebase";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const Login = ({ navigation }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    errorMessage: null,
  });
  const handleLogin = () => {
    const { email, password } = user;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => setUser({ errorMessage: error.message }));
  };
  LayoutAnimation.easeInEaseOut();
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content"></StatusBar>
      <Image
        source={{
          uri:
            "https://png.pngtree.com/thumb_back/fw800/background/20190222/ourmid/pngtree-fluid-gradient-blue-purple-gradient-background-gradientblue-purple-gradientbluepurplesphere-image_49329.jpg",
        }}
        style={{ width, height: height / 1.5, marginTop: -176 }}
      ></Image>
      <Text style={styles.greeting}>{"Hello again. \nWelcom Back"}</Text>
      <View style={styles.errorMessage}>
        {user.errorMessage && (
          <Text style={styles.error}>{user.errorMessage}</Text>
        )}
      </View>
      <View style={styles.form}>
        <View>
          <Text style={styles.inputTitle}>Email Address</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            onChangeText={(email) => setUser({ ...user, email })}
            value={user.email}
          />
        </View>
        <View style={{ marginTop: 32 }}>
          <Text style={styles.inputTitle}>Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            onChangeText={(password) => setUser({ ...user, password })}
            value={user.password}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={{ color: "#fff", fontWeight: "500" }}> Sign in </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ alignSelf: "center", marginTop: 32 }}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={{ color: "#414959", fontSize: 13 }}>
          New to Social App ?{" "}
          <Text style={{ color: "#e9446a", fontWeight: "500" }}> Sign up </Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  greeting: {
    marginTop: -92,
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  errorMessage: {
    height: 72,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30,
  },
  form: {
    marginBottom: 40,
    marginHorizontal: 30,
  },
  inputTitle: {
    color: "#8A8F9E",
    fontSize: 10,
    textTransform: "uppercase",
  },
  input: {
    borderBottomColor: "#8A8F9E",
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: "#161F3D",
  },
  button: {
    marginHorizontal: 30,
    backgroundColor: "#E9446a",
    borderRadius: 4,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
  },
  error: {
    color: "#e9446a",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
  },
});
export default Login;
