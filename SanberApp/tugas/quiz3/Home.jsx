import React from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default Login = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.header}>
        <View style={styles.searchTab}>
          <Icon name="search" size={25} />
          <TextInput
            style={{ flex: 1, marginHorizontal: 10 }}
            placeholder="Search Product"
          />
          <Text> | </Text>
          <Icon name="camera-alt" size={25} />
        </View>
        <Icon
          name="notifications"
          size={25}
          style={{ justifyContent: "center", marginLeft: 10 }}
        />
      </View>
      <ScrollView style={styles.content}>
        <View style={styles.banner}>
          <Image
            source={require("./assets/Slider.png")}
            style={styles.bannerImg}
          />
        </View>
        <View style={styles.category}>
          <TouchableOpacity style={styles.categoryTabs}>
            <Image source={require("./assets/Man.png")} size={30} />
            <Text style={styles.categoryText}>Man</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryTabs}>
            <Image source={require("./assets/Woman.png")} size={30} />
            <Text style={styles.categoryText}>Woman</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryTabs}>
            <Image source={require("./assets/Kids.png")} size={30} />
            <Text style={styles.categoryText}>Kids</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryTabs}>
            <Image source={require("./assets/Bag.png")} size={30} />
            <Text style={styles.categoryText}>Bag</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryTabs}>
            <Image source={require("./assets/Arrow.png")} size={30} />
            <Text style={styles.categoryText}>More</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.flash}>
          <View style={styles.flashHeader}>
            <View style={styles.flashTitle}>
              <Text style={styles.flashText}>Flash Sell</Text>
              <Text style={{ color: "#F89C52" }}>03.30.30</Text>
            </View>
            <View style={styles.flashHeaderAll}>
              <Text>All</Text>
              <Icon name="navigate-next" size={25} color="#F89C52" />
            </View>
          </View>
          <View style={styles.flashContent}>
            <View style={styles.flashTabs}>
              <Image
                source={require("./assets/flash1.png")}
                style={styles.flashImg}
              />
              <Text style={{ color: "#575757", fontSize: 14 }}>
                Tiare HandWash
              </Text>
              <Text style={{ fontSize: 12 }}>$12.22</Text>
            </View>
            <View style={styles.flashTabs}>
              <Image
                source={require("./assets/flash2.png")}
                style={styles.flashImg}
              />
              <Text style={{ color: "#575757", fontSize: 14 }}>
                JBL Speaker
              </Text>
              <Text style={{ fontSize: 12 }}>$12.22</Text>
            </View>
            <View style={styles.flashTabs}>
              <Image
                source={require("./assets/flash3.png")}
                style={styles.flashImg}
              />
              <Text style={{ color: "#575757", fontSize: 14 }}>
                Google Home
              </Text>
              <Text style={{ fontSize: 12 }}>$80.30</Text>
            </View>
          </View>
        </View>
        <View style={styles.product}>
          <View style={styles.productHeader}>
            <Text style={styles.flashText}>New Product</Text>
            <View style={styles.flashHeaderAll}>
              <Text>All</Text>
              <Icon name="navigate-next" size={25} color="#F89C52" />
            </View>
          </View>
          <View style={styles.productList}>
            <View style={styles.productTabs}>
              <Image
                source={{
                  uri:
                    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
                }}
                style={styles.productImg}
              />
              <Text style={{ color: "#575757", fontSize: 14 }}>
                Sepatu Nike
              </Text>
              <Text style={{ fontSize: 12 }}>$12.22</Text>
            </View>
            <View style={styles.productTabs}>
              <Image
                source={require("./assets/flash1.png")}
                style={styles.productImg}
              />
              <Text style={{ color: "#575757", fontSize: 14 }}>
                Tiare HandWash
              </Text>
              <Text style={{ fontSize: 12 }}>$12.22</Text>
            </View>
            <View style={styles.productTabs}>
              <Image
                source={require("./assets/flash1.png")}
                style={styles.productImg}
              />
              <Text style={{ color: "#575757", fontSize: 14 }}>
                Tiare HandWash
              </Text>
              <Text style={{ fontSize: 12 }}>$12.22</Text>
            </View>
            <View style={styles.productTabs}>
              <Image
                source={require("./assets/flash1.png")}
                style={styles.productImg}
              />
              <Text style={{ color: "#575757", fontSize: 14 }}>
                Tiare HandWash
              </Text>
              <Text style={{ fontSize: 12 }}>$12.22</Text>
            </View>
            <View style={styles.productTabs}>
              <Image
                source={require("./assets/flash1.png")}
                style={styles.productImg}
              />
              <Text style={{ color: "#575757", fontSize: 14 }}>
                Tiare HandWash
              </Text>
              <Text style={{ fontSize: 12 }}>$12.22</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchTab: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flex: 1,
    borderWidth: 1,
    height: 40,
    borderColor: "#727C8E",
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  banner: {
    marginVertical: 15,
  },
  bannerImg: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  category: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  categoryTabs: {
    alignItems: "center",
    justifyContent: "center",
  },
  categoryText: {
    color: "#616D80",
  },
  flash: {
    marginVertical: 20,
  },
  flashHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  flashTitle: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-start",
  },
  flashHeaderAll: {
    flexDirection: "row",
    alignItems: "center",
  },
  flashText: {
    fontSize: 26,
    color: "#4D4D4D",
    marginRight: 10,
  },
  flashContent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  flashTabs: {
    width: "30%",
    marginVertical: 5,
  },
  flashImg: {
    width: "100%",
    height: 100,
    borderRadius: 5,
  },
  content: {
    flex: 1,
    marginVertical: 10,
  },
  productHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  productTabs: {
    width: "45%",
    marginVertical: 5,
  },
  productImg: {
    width: "100%",
    height: 200,
    borderRadius: 5,
  },
  productList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  tabBar: {
    height: 50,
  },
});
