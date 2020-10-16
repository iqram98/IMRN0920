import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default AddScreen = () => (
  <View style={styles.container}>
    <Text>Halaman Add Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
