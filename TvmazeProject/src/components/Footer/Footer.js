import React from "react";
import { View, Text } from "react-native";

const Footer = () => {
    const { footerView, footerText } = styles;
    return (
      <View style={footerView}>
        <Text style={footerText}>Amir Taib</Text>
      </View>
    );
};

const styles = {
  footerView: {
    // backgroundColor: "#515151",
    // // paddingBottom: 30,
    // // bottom:0
    // position: "absolute",
    // left: 0,
    // right: 0,
    // bottom: 0,
    // height: "5%"
  },
  footerText: {
    fontSize: 15,
    // flex:1,
    // display:'flex',
    color: "#d1d1d1",
    alignItems: "center",
    justifyContent: "center"
  }
};

export default Footer;
