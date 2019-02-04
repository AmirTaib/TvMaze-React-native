import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import CardShow from "../CardShow/CardShow";
import CardSection from "../CardSection/CardSection";
import { Rating } from "react-native-elements";

const ShowDetails = props => {
  const { showPropertyStyles, textStyle, imageStyle } = styles;

  return (
    <TouchableOpacity onPress={props.onItemSelected}>
      <CardShow>
        <CardSection>
          <View style={showPropertyStyles}>
            <Text style={textStyle}>{props.show.name}</Text>
            <Text style={textStyle}>{props.show.status}</Text>
          </View>
        </CardSection>
        <CardSection>
          <Image style={imageStyle} source={{ uri: props.show.image.medium }} />
        </CardSection>
        <CardSection>
          <Rating
            imageSize={20}
            showRating
            ratingCount={10}
            startingValue={props.show.rating.average}
          />
        </CardSection>
      </CardShow>
    </TouchableOpacity>
  );
};

const styles = {
  showPropertyStyles: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginLeft: 20,
    marginRight: 20
  },
  textStyle: {
    fontSize: 30
  },
  imageStyle: {
    height: 300,
    width: 380
  }
};

export default ShowDetails;
