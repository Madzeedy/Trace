import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";
import NotHeader from "../components/Header/NotHeader";
import * as Icon from "@expo/vector-icons";
import ExploreScreen from "./ExploreScreen";
import MyEventScreen from "./MyEventScreen";
import ScrollableTabView from "react-native-scrollable-tab-view";

class HomeScreen extends Component {
  render(props) {
    return (
      <View style={styles.container}>
        <NotHeader
          headerName="Home"
          onPress={() => this.props.navigation.navigate("Notification")}
        />
        <ScrollableTabView>
          <ExploreScreen tabLabel="Explore" {...this.props} />
          <MyEventScreen tabLabel="My Event" {...this.props} />
        </ScrollableTabView>
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: -20,
    backgroundColor: "#fff"
    // paddingBottom: 40,
  }
});
export default HomeScreen;
