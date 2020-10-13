import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import VideoItem from "./components/VideoItem";
import data from "./data.json";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.navBar}>
        <Image source={require("./images/logo.png")} style={styles.iconYt} />
        <View style={styles.rightNav}>
          <TouchableOpacity>
            <Icon name="search" size={25} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="account-circle" size={25} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.body}>
        <FlatList
          data={data.items}
          renderItem={(video) => <VideoItem video={video.item} />}
          keyExtractor={(video) => video.id}
          ItemSeparatorComponent={() => (
            <View style={{ height: 1, backgroundColor: "#efefef" }} />
          )}
        />
      </View>
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabIcon}>
          <Icon name="home" size={25} color="gray" />
          <Text style={styles.tabText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabIcon}>
          <Icon name="whatshot" size={25} color="gray" />
          <Text style={styles.tabText}>Trending</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabIcon}>
          <Icon name="subscriptions" size={25} color="gray" />
          <Text style={styles.tabText}>Subscriptions</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabIcon}>
          <Icon name="folder" size={25} color="gray" />
          <Text style={styles.tabText}>Library</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#efefef",
  },
  navBar: {
    height: 50,
    backgroundColor: "white",
    elevation: 3,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  iconYt: {
    width: 100,
    height: 22,
  },
  rightNav: {
    flexDirection: "row",
    width: 70,
    justifyContent: "space-between",
  },
  body: {
    flex: 1,
  },
  tabBar: {
    height: 60,
    backgroundColor: "white",
    elevation: 5,
    justifyContent: "space-around",
    flexDirection: "row",
  },
  tabIcon: {
    alignItems: "center",
    justifyContent: "center",
    color: "gray",
  },
  tabText: {
    color: "gray",
    fontSize: 11,
    paddingTop: 5,
  },
});
