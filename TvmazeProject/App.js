import React from "react";
import { AppRegistry, View } from "react-native";
import { Header } from "react-native-elements";
import  Main from "./src/components/Main/Main";

const App = () => (
  <View style={styles.viewStyle}>
    <Header
      leftComponent={{
        icon: "menu",
        color: "#fff",
        onPress: () => alert("ea")
      }}
      centerComponent={{ text: "TVMAZE", style: { color: "#fff" } }}
      rightComponent={{ icon: "home", color: "#fff" }}
    />
    <Main />
  </View>
);

const styles = {
  viewStyle: {
    flex:1
  }
};

export default App;

AppRegistry.registerComponent("TvmazeProject", () => App);
