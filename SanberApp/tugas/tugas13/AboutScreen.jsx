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
import Icon from "react-native-vector-icons/MaterialIcons";

class AboutScreen extends Component {
  render() {
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
          <View style={styles.header}>
            <View style={styles.meImage}>
              <Image
                source={require("./assets/photo.jpg")}
                style={{ width: 95, height: 95, borderRadius: 50 }}
              />
            </View>
            <View style={styles.meDesc}>
              <Text style={[styles.meName, styles.meText]}>Iqram Nugraha</Text>
              <Text style={styles.meText}>Maros, Sulawesi Selatan</Text>
              <Text style={styles.meText}>SanberApp CEO</Text>
            </View>
          </View>
          <View style={styles.paper}>
            <View style={styles.find}>
              <Text>Find Me On :</Text>
              <TouchableOpacity style={styles.box}>
                <View style={styles.iconMedia}>
                  <Image
                    style={{ width: "100%", height: "100%" }}
                    source={require("./assets/Google.png")}
                  />
                </View>
                <Text>iqram7898@gmail.com</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.box}>
                <View style={styles.iconMedia}>
                  <Image
                    style={{ width: "100%", height: "100%" }}
                    source={require("./assets/Facebook.png")}
                  />
                </View>
                <Text>Iqram Nugraha</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.box}>
                <View style={styles.iconMedia}>
                  <Image
                    style={{ width: "100%", height: "100%" }}
                    source={require("./assets/Instagram.png")}
                  />
                </View>
                <Text>@iqram_nugraha</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.another}>
              <Text>Looking For Another Apps?</Text>
              <TouchableOpacity style={styles.box}>
                <View style={styles.iconMedia}>
                  <Image
                    style={{ width: "100%", height: "100%" }}
                    source={require("./assets/Github_black.png")}
                  />
                </View>
                <Text>iqram98</Text>
              </TouchableOpacity>
            </View>
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
        </SafeAreaView>
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
    width: "80%",
    flexDirection: "row",
  },
  meImage: {
    width: 100,
    height: 100,
    backgroundColor: "white",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  meDesc: {
    marginLeft: 20,
    justifyContent: "center",
  },
  meName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  meText: {
    color: "white",
    paddingVertical: 5,
  },
  paper: {
    marginTop: 50,
    paddingHorizontal: 20,
    marginHorizontal: 50,
    width: "90%",
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    elevation: 5,
    flex: 1,
  },
  box: {
    width: "100%",
    height: 50,
    paddingHorizontal: 10,
    elevation: 5,
    backgroundColor: "white",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 10,
  },
  iconMedia: {
    width: 40,
    height: 40,
    borderColor: "#87CDFC",
    borderWidth: 0.5,
    borderRadius: 50,
    backgroundColor: "white",
  },
  find: {
    height: "70%",
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
});

export default AboutScreen;
