import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

export default Chart = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Text>Halaman Chart</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
