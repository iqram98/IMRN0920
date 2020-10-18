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
import Icon from "react-native-vector-icons/Zocial";

export default Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Text style={styles.welcome}>Welcom Back</Text>
      <Text>Sign in to continue</Text>
      <View style={styles.content}>
        <Text>Email</Text>
        <TextInput style={styles.inputs} />
        <Text>Password</Text>
        <TextInput style={styles.inputs} secureTextEntry={true} />
        <Text style={styles.forgot}>Forgot Password?</Text>
        <TouchableOpacity
          style={styles.signin}
          onPress={() => navigation.replace("Home")}
        >
          <Text style={styles.signintext}>Sign In</Text>
        </TouchableOpacity>
        <Text style={{ alignSelf: "center", marginVertical: 30, fontSize: 15 }}>
          -Or-
        </Text>
        <View style={styles.mediaContainer}>
          <TouchableOpacity style={styles.media}>
            <Icon name="facebook" />
            <Text>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.media}>
            <Icon name="google" />
            <Text>Google</Text>
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
    marginTop: 100,
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
  signin: {
    height: 50,
    backgroundColor: "#F77866",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 30,
  },
  signintext: {
    color: "white",
    fontSize: 18,
  },
  mediaContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  media: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#E6EAEE",
    borderRadius: 10,
    height: 45,
    width: 100,
    justifyContent: "space-around",
    alignItems: "center",
  },
});
