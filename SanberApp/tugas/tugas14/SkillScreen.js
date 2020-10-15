import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Image,
  FlatList,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/MaterialIcons";
import Skill from "./components/Skill";
import data from "./skillData.json";

class SkillScreen extends Component {
  render() {
    return (
      <LinearGradient
        colors={["#87CDFC", "#114E78"]}
        start={{ x: 0, y: 0 }}
        style={{
          flex: 1,
        }}
      >
        <View style={styles.container}>
          <StatusBar backgroundColor="#87CDFC" barStyle="light-content" />
          <View style={styles.header}>
            <Text style={styles.skillText}>User Skill</Text>
            <Image
              source={require("./assets/sanber_app.png")}
              style={styles.sanberImage}
            />
          </View>
          <View style={styles.content}>
            <View style={styles.userBox}>
              <Icon name="account-circle" size={100} color="#9FCDED" />
            </View>
            <Text style={styles.userName}>Harry Potter</Text>
            <Text>Fullstack Developer</Text>
            <View
              style={{
                width: "50%",
                height: 1,
                backgroundColor: "#9FCDED",
                marginTop: 10,
              }}
            ></View>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-around",
                marginVertical: 20,
              }}
            >
              <TouchableOpacity style={styles.buttonLoginTouch}>
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
                    Programming
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonLoginTouch}>
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
                    Framework
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonLoginTouch}>
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
                    Teknologi
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
            <FlatList
              style={{ width: "100%" }}
              data={data.items}
              renderItem={(data) => <Skill data={data.item} />}
              keyExtractor={(data) => data.id.toString()}
            />
          </View>
          <View style={styles.tabBar}>
            <TouchableOpacity style={styles.tabIcon}>
              <Icon name="home" size={25} color="#87CDFC" />
              <Text style={styles.tabText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabIcon}>
              <Icon name="help" size={25} color="#87CDFC" />
              <Text style={styles.tabText}>About</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabIcon}>
              <Icon name="exit-to-app" size={25} color="#87CDFC" />
              <Text style={styles.tabText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 30,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  skillText: {
    fontFamily: "Roboto",
    fontSize: 25,
  },
  sanberImage: {
    height: 40,
    width: 150,
  },
  content: {
    flex: 1,
    width: "95%",
    backgroundColor: "white",
    marginTop: 70,
    alignItems: "center",
    borderRadius: 10,
  },
  userBox: {
    backgroundColor: "white",
    marginTop: -50,
    borderRadius: 50,
    elevation: 3,
  },
  tabBar: {
    marginTop: 30,
    height: 60,
    width: "100%",
    backgroundColor: "white",
    elevation: 5,
    justifyContent: "space-around",
    flexDirection: "row",
  },
  tabIcon: {
    alignItems: "center",
    justifyContent: "center",
  },
  tabText: {
    color: "#87CDFC",
    fontSize: 11,
    paddingTop: 5,
  },
  userName: {
    fontSize: 24,
  },
  buttonLogin: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    width: "30%",
    height: 30,
  },
  buttonLoginTouch: {
    width: "100%",
    alignItems: "center",
  },
});

export default SkillScreen;
