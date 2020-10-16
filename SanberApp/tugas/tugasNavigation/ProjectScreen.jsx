import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default ProjectScreen = () => (
  <View style={styles.container}>
    <Text>Halaman Project Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
