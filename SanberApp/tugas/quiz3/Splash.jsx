import React, { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";

export default Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Register");
    }, 3000);
  });

  return (
    <View style={styles.container}>
      <Image source={require("./assets/logo.png")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
