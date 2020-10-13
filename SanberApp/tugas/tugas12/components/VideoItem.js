import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

class VideoItem extends Component {
  render() {
    let video = this.props.video;
    return (
      <TouchableOpacity>
        <View style={styles.container}>
          <Image
            source={{ uri: video.snippet.thumbnails.medium.url }}
            style={{ height: 200 }}
          />
          <View style={styles.descContainer}>
            <Image
              source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }}
              style={styles.descUser}
            />
            <View style={styles.descDetail}>
              <Text numberOfLines={2} style={{ fontSize: 16 }}>
                {video.snippet.title}
              </Text>
              <Text style={styles.descText}>
                {video.snippet.channelTitle} {" · "}
                {nFormatter(video.statistics.viewCount, 1)}
                {" views · 3 month ago"}
              </Text>
            </View>
            <TouchableOpacity>
              <Icon name="more-vert" size={20} color="gray" />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

function nFormatter(num, digits) {
  var si = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var i;
  for (i = si.length - 1; i > 0; i--) {
    if (num >= si[i].value) {
      break;
    }
  }
  return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "white",
  },
  descContainer: {
    paddingTop: 15,
    flexDirection: "row",
  },
  descUser: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  descDetail: {
    paddingHorizontal: 15,
    flex: 1,
  },
  descText: {
    fontSize: 14,
    color: "gray",
    paddingTop: 5,
  },
});

export default VideoItem;
