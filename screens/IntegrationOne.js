import React, { Component } from "react";
import {
  Picker,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Dimensions,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity
} from "react-native";
import { TextInput } from "react-native-paper";
const { width } = Dimensions.get("window");

export default class IntExOne extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      isLoading: true,
      data: []
    };
  }

  updateValue(text, field) {
    if(field=='name'){
      this.setState({
        name: text,
      })
    } else if(field=='email'){
      this.setState({
        email: text
      })
    }
  }
  submit(){
    let collection={}
    collection.name=this.state.name,
    collection.email=this.state.email,
    console.warn(collection)
  }

  componentDidMount() {
    return fetch("http://dummy.restapiexample.com/api/v1/employees")
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          data: responseJson.data[0]
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Name"
          style={styles.input}
          onChangeText={text => this.updateValue(text, "name")}
        />

        <TextInput
          placeholder="Email"
          style={styles.input}
          onChangeText={text => this.updateValue(text, "email")}
        />

        <TouchableOpacity style={styles.goBtn} onPress={() => this.submit()}>
          <Text>Go</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
IntExOne.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
     justifyContent: "center"
    //alignContent: "center",
  },
  item: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: "center",
    justifyContent: "center",
  },
  goBtn: {
    backgroundColor: 'skyblue',
    height: 40,
    color: '#fff',
    justifyContent: "center",
    alignItems: "center"
  }
});
