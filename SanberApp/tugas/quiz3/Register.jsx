import React from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

export default Register = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Text style={styles.welcome}>Welcome</Text>
      <Text>Sign up to continue</Text>
      <View style={styles.content}>
        <Text>Name</Text>
        <TextInput style={styles.inputs} />
        <Text>Email</Text>
        <TextInput style={styles.inputs} />
        <Text>Phone Number</Text>
        <TextInput style={styles.inputs} />
        <Text>Password</Text>
        <TextInput style={styles.inputs} secureTextEntry={true} />
        <TouchableOpacity
          style={styles.signUp}
          onPress={() => navigation.replace("Home")}
        >
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
        <View style={styles.signIn}>
          <Text>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={{ color: "#F77866" }}> Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          alignSelf: "center",
          backgroundColor: "black",
          height: 3,
          width: "70%",
          marginTop: 100,
          borderRadius: 5,
        }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    padding: 20,
  },
  welcome: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#0C0423",
  },
  content: {
    marginTop: 20,
    backgroundColor: "white",
    elevation: 5,
    borderRadius: 10,
    padding: 20,
    paddingTop: 50,
  },
  inputs: {
    borderBottomWidth: 1,
    borderBottomColor: "#E6EAEE",
    marginBottom: 20,
  },
  forgot: {
    alignSelf: "flex-end",
  },
  signUp: {
    height: 50,
    backgroundColor: "#F77866",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 30,
  },
  signUpText: {
    color: "white",
    fontSize: 18,
  },
  signIn: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
});
