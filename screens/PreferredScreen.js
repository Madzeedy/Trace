import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Picker,
  Image,
  Platform,
  TouchableOpacity
} from "react-native";
import NotHeader from "../components/Header/NotHeader";
import * as Icon from "@expo/vector-icons";
import styles from "../components/genStyle/styles";
import navigationOptions from "@react-navigation/stack";

class PreferredScreen extends Component {
  render({ onPress, text } = this.props) {
    return (
      <View style={{ flex: 1 }}>
        <NotHeader headerName="Home" onPress={() => this.props.navigation.navigate("Notification")} />
        <ScrollView>
          <Text style={styles.caption}>Your preferred</Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("EventDetail")}>
            <View style={styles.all}>
              <Image
                style={styles.image2}
                source={require("../assets/images/event4.png")}
              />
              <View style={styles.image2details}>
                <Text style={styles.subTitle}>Kigali Festival</Text>
                <Text style={styles.description}>31st Oct</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.navigate("EventDetail")}>
            <View style={styles.all}>
              <Image
                style={styles.image2}
                source={require("../assets/images/event3.jpg")}
              />
              <View style={styles.image2details}>
                <Text style={styles.subTitle}>Kigali Festival</Text>
                <Text style={styles.description}>31st Oct</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.navigate("EventDetail")}>
            <View style={styles.all}>
              <Image
                style={styles.image2}
                source={require("../assets/images/event2.jpg")}
              />
              <View style={styles.image2details}>
                <Text style={styles.subTitle}>Kigali Festival</Text>
                <Text style={styles.description}>31st Oct</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.navigate("EventDetail")}>
            <View style={styles.all}>
              <Image
                style={styles.image2}
                source={require("../assets/images/event1.jpg")}
              />
              <View style={styles.image2details}>
                <Text style={styles.subTitle}>Kigali Festival</Text>
                <Text style={styles.description}>31st Oct</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.navigate("EventDetail")}>
            <View style={styles.all}>
              <Image
                style={styles.image2}
                source={require("../assets/images/event1.jpg")}
              />
              <View style={styles.image2details}>
                <Text style={styles.subTitle}>Kigali Festival</Text>
                <Text style={styles.description}>31st Oct</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.navigate("EventDetail")}>
            <View style={styles.all}>
              <Image
                style={styles.image2}
                source={require("../assets/images/event1.jpg")}
              />
              <View style={styles.image2details}>
                <Text style={styles.subTitle}>Kigali Festival</Text>
                <Text style={styles.description}>31st Oct</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.navigate("EventDetail")}>
            <View style={styles.all}>
              <Image
                style={styles.image2}
                source={require("../assets/images/event1.jpg")}
              />
              <View style={styles.image2details}>
                <Text style={styles.subTitle}>Kigali Festival</Text>
                <Text style={styles.description}>31st Oct</Text>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
PreferredScreen.navigationOptions = {
  headerShown: false,
};

export default PreferredScreen;
