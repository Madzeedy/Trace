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
import Colors from '../constants/Colors';
import ScrollableTabView from "react-native-scrollable-tab-view";
import LiveEventScreen from "./LiveEventScreen";
import PastEventScreen from "./PastEventScreen";

class ManageEventsScreen extends Component {
  render() {
    return (

      <View style={styles.container}>
        <NotHeader
          headerName="Home"
          onPress={() => this.props.navigation.navigate("Notification")}
        />
        <ScrollableTabView>
          <LiveEventScreen tabLabel="Live" {...this.props} />
          <PastEventScreen tabLabel="Past" {...this.props} />
        </ScrollableTabView>
      </View>
    );
  }
}
ManageEventsScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //paddingBottom: 40
  }
});

export default ManageEventsScreen;
