import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

class Skill extends Component {
  render() {
    let data = this.props.data;
    return (
      <TouchableOpacity style={{ width: "100%" }}>
        <View style={styles.container}>
          <View style={styles.dataImg}>
            <Image
              source={require("../assets/react.png")}
              style={{ width: 80, height: 80 }}
            />
          </View>
          <View style={styles.desc}>
            <Text style={{ fontSize: 20 }}>{data.skillName}</Text>
            <Text>{data.categoryName}</Text>
            <Text>{data.percentageProgress}</Text>
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
});

export default Skill;
