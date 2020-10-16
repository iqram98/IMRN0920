import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

class Skill extends Component {
  render() {
    let data = this.props.data;
    let img;
    switch (data.logoUrl) {
      case "react":
        img = require("../assets/react.png");
        break;
      case "laravel":
        img = require("../assets/laravel.png");
        break;
      case "javascript":
        img = require("../assets/javascript.png");
        break;
      case "python":
        img = require("../assets/python.png");
        break;
      case "git":
        img = require("../assets/git.png");
        break;
      default:
        img = require("../assets/github.png");
        break;
    }
    return (
      <TouchableOpacity style={{ width: "100%" }}>
        <View style={styles.container}>
          <View style={styles.dataImg}>
            <Image source={img} style={{ width: 80, height: 80 }} />
          </View>
          <View style={styles.desc}>
            <Text style={{ fontSize: 20 }}>{data.skillName}</Text>
            <Text>{data.categoryName}</Text>
            <View style={styles.progressBox}>
              <LinearGradient
                colors={["#87CDFC", "#114E78"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{
                  width: data.percentageProgress,
                  height: 19,
                  borderRadius: 20,
                }}
              ></LinearGradient>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: "row",
  },
  dataImg: {
    width: 80,
    height: 80,
  },
  desc: {
    flex: 1,
    paddingHorizontal: 10,
    paddingRight: 20,
  },
  progressBox: {
    height: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#1A9DF7",
  },
});

export default Skill;
