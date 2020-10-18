import React, { Component } from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

class Product extends Component {
  render() {
    let data = this.props.data;
    return (
      <TouchableOpacity style={styles.productTabs}>
        <Image
          source={{
            uri: data.imageUrl,
          }}
          style={styles.productImg}
        />
        <Text style={{ color: "#575757", fontSize: 14 }}>
          {data.productName}
        </Text>
        <Text style={{ fontSize: 12 }}>{data.price}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  productTabs: {
    width: "45%",
    marginVertical: 5,
  },
  productImg: {
    width: "100%",
    height: 200,
    borderRadius: 5,
  },
});

export default Product;
