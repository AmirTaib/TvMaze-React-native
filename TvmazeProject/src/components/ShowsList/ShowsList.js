import React from "react";
import { FlatList, View, TouchableHighlight } from "react-native";
import ShowDetails from "../ShowDetails/ShowDetails";
import MainDetailsShow from "../MainDetailsShow/MainDetailsShow";
import axios from "axios";

class ShowsList extends React.PureComponent {

  state = {
    shows: [],
    selectedShow: null,
    selectedShowById: null
  };

  componentWillMount() {
    axios
      .get("https://api.tvmaze.com/shows")
      .then(res => {
        this.setState({ shows: res.data });
      })
      .catch(error => {
        console.log(error.message);
      });
  }

  showSelectedHandler = id => {
    this.setState(prevState => {
      return {
        selectedShow: prevState.shows.filter(show => {return show.id === id;})
      };
    });
  };

  modalClosedHandler = () => {
    this.setState({
      selectedShow: null
    });
  };

  render() {
    return (
      <View>
        <MainDetailsShow
          selectedShow={this.state.selectedShow}
          onModalClosed={this.modalClosedHandler}
        />
        <FlatList
        key={'showFlatList'}
          data={this.state.shows}
          renderItem={({ item }) => (
            <TouchableHighlight
              onPress={() => {
                this.setState({ selectedShowById: item });
                this.showSelectedHandler;
              }}
            >
              <ShowDetails
                key={item.id}
                show={item}
                onItemSelected={() => {
                  this.setState({ selectedShowById: item });
                  this.showSelectedHandler(item.id);
                }}
              />
            </TouchableHighlight>
          )}
          initialNumToRender={1}
        />
      </View>
    );
  }
}

export default ShowsList;
