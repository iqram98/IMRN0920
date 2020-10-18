import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

export default Profile = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Text>Halaman Profil</Text>
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
