import React from "react";
import { Modal, View, ScrollView, Image, Text, Button } from "react-native";
import CardShow from "../CardShow/CardShow";
import CardSection from "../CardSection/CardSection";
import { Rating } from "react-native-elements";

const MainDetailsShow = props => {
  const { showPropertyStyles, textStyle, imageStyle } = styles;

  let modalContent = null;

  if (props.selectedShow) {
    modalContent = (
      <View>
        <CardShow>
          <CardSection>
            <View style={showPropertyStyles}>
              <Text style={textStyle}>{props.selectedShow[0].name}</Text>
              <Text style={textStyle}>{props.selectedShow[0].status}</Text>
            </View>
          </CardSection>
          <CardSection>
            <Image
              style={imageStyle}
              source={{ uri: props.selectedShow[0].image.medium }}
            />
          </CardSection>
          <CardSection>
            <Rating
              imageSize={20}
              showRating
              ratingCount={10}
              startingValue={props.selectedShow[0].rating.average}
            />
          </CardSection>
          <CardSection>
            <View style={showPropertyStyles}>
              <Text style={textStyle}>language:</Text>
              <Text style={{fontSize:15}}>{props.selectedShow[0].language}</Text>
            </View>
          </CardSection>
          <CardSection>
            <View style={showPropertyStyles}>
              <Text style={textStyle}>summary:</Text>
              <Text style={{fontSize:15}}>{props.selectedShow[0].summary}</Text>
            </View>
          </CardSection>
          <CardSection>
            <View style={showPropertyStyles}>
              <Text style={textStyle}>genres:</Text>
              <Text style={{fontSize:15}}>{props.selectedShow[0].genres}</Text>
            </View>
          </CardSection>
          <CardSection>
            <View style={showPropertyStyles}>
              <Text style={textStyle}>schedule:</Text>
              <Text style={{fontSize:15}}>{props.selectedShow[0].schedule.time}</Text>
            </View>
          </CardSection>
        </CardShow>
        {/* <Image
          source={{ uri: props.selectedShow[0].image.medium }}
          style={styles.showImage}
        />
        <Text style={styles.showName}>{props.selectedShow[0].name}</Text> */}
      </View>
    );
  }
  return (
    <Modal
      onRequestClose={props.onModalClosed}
      visible={props.selectedShow !== null}
      animationType="slide"
    >
      <ScrollView style={styles.modalContainer}>
        <View>
          <Button title="Close" onPress={props.onModalClosed} />
        </View>
        {modalContent}
      </ScrollView>
    </Modal>
  );
};

export default MainDetailsShow;

const styles = {
  showPropertyStyles: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginLeft: 20,
    marginRight: 20
  },
  textStyle: {
    fontSize: 20
  },
  imageStyle: {
    height: 300,
    width: 380
  }
};
