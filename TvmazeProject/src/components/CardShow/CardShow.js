import React from "react";
import { View } from "react-native";

const CardShow = props => {

  const { cardStyle } = styles;
  return (
  <View style={cardStyle}>
      {props.children}
  </View>);
};

const styles = {
  cardStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginRight: 5,
    marginLeft: 5,
    marginTop: 5
  }
};

export default CardShow;
