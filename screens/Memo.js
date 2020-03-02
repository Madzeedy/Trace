// import * as React from 'react';
// import { Button, Image, View } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import Constants from 'expo-constants';
// import * as Permissions from 'expo-permissions';

// export default class Memo extends React.Component {
//   state = {
//     image: null,
//   };

//   render() {
//     let { image } = this.state;

//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Button
//           title="Pick an image from camera roll"
//           onPress={this._pickImage}
//         />
//       </View>
//     );
//   }

//   componentDidMount() {
//     this.getPermissionAsync();
//     console.log('hi');
//   }

//   getPermissionAsync = async () => {
//     if (Constants.platform.android) {
//       const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
//       if (status !== 'granted') {
//         alert('Sorry, we need camera roll permissions to make this work!');
//       }
//     }
// }
// Memo.navigationOptions = {
//   headerShown: false,
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     paddingBottom: 40
//   },
//   title: {
//     height: 40
//   },
//   titles: {
//     flexDirection: "row"
//   },
//   text2: {
//     margin: 0,
//     position: "absolute",
//     top: "50%",
//     fontSize: 18,
//     marginLeft: 230,
//     color: "#070707"
//   },
//   text1: {
//     margin: 0,
//     position: "absolute",
//     top: "50%",
//     fontSize: 18,
//     marginLeft: 20,
//     color: "#070707"
//   },
//   caption: {
//     fontSize: 16,
//     marginTop: 40,
//     marginLeft: 30,
//     paddingBottom: 10
//   },
//   border: {
//     borderBottomWidth: 0.4,
//     borderBottomColor: "#aeaeb0",
//     marginTop: 5
//     //height: 40
//   },
//   image: {
//     width: 216,
//     height: 126,
//     borderTopLeftRadius: 5,
//     borderTopRightRadius: 5
//   },
//   ImageCage: {
//     height: 159,
//     width: 216,
//     borderWidth: 0.4,
//     marginLeft: 30,
//     borderRadius: 5
//   },
//   EventDetails: {},
//   ImageDetails: {
//     flexDirection: "row"
//   },
//   rightIcon1: {
//     marginLeft: 110,
//     marginTop: -20,
//     color: "#707070"
//   },
//   rightIcon2: {
//     marginLeft: 170,
//     marginTop: -25,
//     color: "#707070"
//   },
//   scrollView: {
//     maxHeight: 160
//   },
//   name: {
//     marginLeft: 5
//   },
//   image2: {
//     marginLeft: 50,
//     width: 77,
//     height: 58,
//     borderRadius: 5
//   },
//   image2details: {
//     marginLeft: 10,
//     paddingBottom: 30
//   },
//   all: {
//     flexDirection: "row"
//   }

//   _pickImage = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1
//     });

//     console.log(result);

//     if (!result.cancelled) {
//       this.setState({ image: result.uri });
//     }
//   };
// }