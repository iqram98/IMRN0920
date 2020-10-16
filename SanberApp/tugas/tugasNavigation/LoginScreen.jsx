import React, { Component } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const LoginScreen = ({ navigation }) => {
  return (
    <LinearGradient
      colors={["#87CDFC", "#114E78"]}
      start={{ x: 0, y: 0 }}
      style={{
        flex: 1,
      }}
    >
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#87CDFC" barStyle="light-content" />
        <Image style={styles.logo} source={require("./assets/logo.png")} />
        <View style={styles.paper}>
          <View style={styles.sanber}>
            <Image
              style={styles.sanberImage}
              source={require("./assets/sanber_app.png")}
            />
          </View>
          <View style={styles.content}>
            <Text style={styles.loginText}>Login</Text>
            <TextInput placeholder="Username" style={styles.input} />
            <TextInput placeholder="Password" style={styles.input} />
            <TouchableOpacity
              onPress={() => navigation.replace("SkillScreen")}
              style={styles.buttonLoginTouch}
            >
              <LinearGradient
                colors={["#1A9DF7", "#185C8A"]}
                start={{ x: 1, y: 1 }}
                end={{ x: 0, y: 0 }}
                style={styles.buttonLogin}
              >
                <Text
                  style={{
                    backgroundColor: "transparent",
                    fontSize: 15,
                    color: "#fff",
                  }}
                >
                  Login
                </Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ width: "100%", alignItems: "center", marginTop: 20 }}
            >
              <Text style={styles.buttonRegister}>New User? Sign Up Here</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.footer}>
            <View style={styles.othersLine}>
              <View
                style={{
                  width: "30%",
                  height: 0.5,
                  backgroundColor: "gray",
                  marginHorizontal: 10,
                }}
              ></View>
              <Text>or sign in with</Text>
              <View
                style={{
                  width: "30%",
                  height: 0.5,
                  backgroundColor: "gray",
                  marginHorizontal: 10,
                }}
              ></View>
            </View>
            <View style={styles.media}>
              <TouchableOpacity style={styles.iconMedia}>
                <Image
                  style={{ width: "100%", height: "100%" }}
                  source={require("./assets/Google.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconMedia}>
                <Image
                  style={{ width: "100%", height: "100%" }}
                  source={require("./assets/Facebook.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconMedia}>
                <Image
                  style={{ width: "100%", height: "100%" }}
                  source={require("./assets/Github_black.png")}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 30,
  },
  logo: {
    width: 50,
    height: 50,
  },
  paper: {
    marginTop: 10,
    width: "85%",
    height: 600,
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  sanber: {
    height: 100,
    paddingTop: 40,
  },
  sanberImage: {
    height: 40,
    width: 150,
  },
  content: {
    width: "90%",
    padding: 20,
    paddingTop: 50,
    alignItems: "center",
    flex: 1,
  },
  loginText: {
    fontSize: 25,
    paddingBottom: 30,
    alignSelf: "flex-start",
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#3598DB",
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    marginBottom: 20,
  },
  buttonLoginTouch: {
    width: "100%",
    alignItems: "center",
  },
  buttonLogin: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    width: "40%",
    height: 40,
  },
  buttonRegister: {
    color: "#3598DB",
  },
  othersLine: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  iconMedia: {
    width: 40,
    height: 40,
    elevation: 10,
    borderColor: "gray",
    borderRadius: 50,
    backgroundColor: "white",
  },
  media: {
    justifyContent: "space-around",
    flexDirection: "row",
    width: "80%",
    marginTop: 20,
  },
  footer: {
    alignItems: "center",
    height: 100,
  },
});

export default LoginScreen;
