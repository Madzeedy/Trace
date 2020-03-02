import React, { Component } from "react";
import {
  Picker,
  StyleSheet,
  Text,
  View,
  Button,
  KeyboardAvoidingView,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import * as Icon from "@expo/vector-icons";
import TransInput from "../components/TextInputs/EditInput";
import MainButton from "../components/Buttons/mainButton";
import BackHeader from "../components/Header/BackHeader";
import DateTimePicker from "react-native-modal-datetime-picker";
import { token } from "../constants/util";
import Colors from "../constants/Colors";
import moment from 'moment';
import styles from "../components/genStyle/styles";
import SmallInput from "../components/TextInputs/SmallInput";
const { width } = Dimensions.get("window");
moment
export default class CreateEventScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      visible: false,
      language: "",
      date: "",
      category: "",
      event: "",
      eventImage: "",
      title: '',
      description: '',
      start_date: '',
      end_date: '',
      venue: '',
    };
  }

  handlePicker = (datetime) => {
    this.setState({
      isVisible: false,
      start_date: moment(datetime).format("lll"),

    });
  };
  Picker = (datetime) => {
    this.setState({
      visible: false,
      end_date: moment(datetime).format("lll"),

    });
  };
  showPicker = () => {
    this.setState({
      isVisible: true
    });
  };

  show = () => {
    this.setState({
      visible: true
    });
  };

  hidePicker = () => {
    this.setState({
      isVisible: false
    });
  };

  hide = () => {
    this.setState({
      visible: false
    });
  };
  //Backend Post

  Event = async () => {
    const getToken = await AsyncStorage.getItem(token);
    // console.log(getToken)

    let image = new FormData();
    image.append("image", image)
    var data = {
      title: this.state.title,
      description: this.state.description,
      start_date: this.state.start_date,
      end_date: this.state.end_date,
      venue: this.state.venue,
      eventImage: this.state.eventImage,
    }

    fetch('https://tracevent.herokuapp.com/api/event', {
      method: 'POST',
      headers: {
        // 'Accept': 'application/json',
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${getToken}`
      },

      body: JSON.stringify(data)

    })
      .then((response) => {
        response.json()
        console.log(response)
      }
      )
      .then(async (response) => {


        console.log(response)
        if (getToken !== null) {
          this.props.navigation.navigate('TabScreen');
        }
        else {
          console.log('try again')
        }
        // console.log(response);
      }).catch((error) => {
        console.log(error)
      });
    console.log(data)
  }

  // end 

  render() {
    let { eventImage } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <BackHeader
          headerName="Create Events"
          onPress={() => alert("Please fill the required inputs")}
        />

        <ScrollView>
          <View style={styles.Form}>
            <TransInput title="Title" onChangeText={title => this.setState({ title: title })}
              value={this.state.title} />
            <TransInput title="Event Description" onChangeText={description => this.setState({ description: description })}
              value={this.state.description} />
          </View>
          <Text style={styles.subEvent}>Event Starts</Text>
          <View style={styles.viewBac}>
            <View style={styles.Form}>
              <Text style={styles.time}>{this.state.start_date}</Text>
            </View>
            <MainButton
              text="Select Date&Time"
              style={{ marginLeft: -20 }}
              onPress={this.showPicker}
            />
          </View>
          <Text style={styles.subEvent}>Event Ends</Text>
          <View style={styles.viewBac}>
            <View style={styles.Form}>
              <Text style={styles.time}>{this.state.end_date}</Text>
            </View>
            <MainButton
              text="Select Date&Time"
              style={{ marginLeft: -20 }}
              onPress={this.show}
            />
          </View>

          <View style={styles.Form}>
            <Text
              style={{
                marginLeft: -207,
                paddingBottom: 15,
                paddingTop: 10,
                color: "#707070",
                fontWeight: "bold"
              }}
              onPress={() => this.props.navigation.navigate("Ticket")}
            >

              Ticket
            </Text>
            <View
              style={{ borderWidth: 0.7, width: 240, marginBottom: 10 }}
            ></View>
            <TransInput style={{ paddingTop: 10 }} title="Venue" onChangeText={venue => this.setState({ venue: venue })}
              value={this.state.venue} />
          </View>

          <View style={styles.viewPicker}>
            <Picker
              style={styles.picker}
              selectedValue={this.state.language}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ language: itemValue })
              }
            >
              <Picker.Item label="Event type" value="Event type" />
              <Picker.Item label="Business" value="Business" />
              <Picker.Item label="Education" value="Education" />
              <Picker.Item label="Entertainment" value="Entertainment" />
              <Picker.Item label="Trade Shows" value="Trade Shows" />
            </Picker>
          </View>

          <View style={styles.viewPicker}>
            <Picker
              style={styles.picker}
              selectedValue={this.state.event}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ event: itemValue })
              }
            >
              <Picker.Item label="Privacy" value="Privacy" />
              <Picker.Item label="Private event" value="Private event" />
              <Picker.Item label="Public event" value="Public event" />
            </Picker>

            {/* Image uploader */}
            <View style={styles.containers}>
              <TouchableOpacity style={styles.upload} onPress={this._pickImage}>
                <Icon.MaterialIcons
                  style={styles.upIcon}
                  name={"add-a-photo"}
                  size={22}
                />
                <Text style={styles.upText}>Event Image</Text>
              </TouchableOpacity>

              <View style={styles.reminder}>
                <Icon.Entypo style={styles.remIcon} name={"info"} size={22} />
                <Text style={styles.remText}>
                  Maximum image size is 5mb. Recommended dimension: 1200x320
                  pixels
                </Text>
              </View>
            </View>
            {/* End of img Uploader */}
            <MainButton
              text="Create"
              onPress={this.Event}
            />
          </View>
        </ScrollView>

        <KeyboardAvoidingView
          behavior={"padding"}
          keyboardVerticalOffset={width / 24}
        />

        <DateTimePicker
          isVisible={this.state.isVisible}
          onConfirm={this.handlePicker}
          onCancel={this.hidePicker}
          mode={"datetime"}
          is24Hour={true}
        />
        <DateTimePicker
          isVisible={this.state.visible}
          onConfirm={this.Picker}
          onCancel={this.hide}
          mode={"datetime"}
          is24Hour={true}
        />
      </View>
    );
  }

  componentDidMount() {
    this.getPermissionAsync();
    // console.log('hi');
  }

  getPermissionAsync = async () => {
    if (Constants.platform.android) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }
  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ eventImage: result.uri });
    }
  }



}
CreateEventScreen.navigationOptions = {
  headerShown: false,
};
