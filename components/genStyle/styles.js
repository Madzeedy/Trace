import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../constants/Colors';

const screenWidth = Dimensions.get('window').width
const screenheight = Dimensions.get('window').height

export default StyleSheet.create({

    container: {
        // flex: 1,
    },
    backImage: {
        width: screenWidth,
        height: screenheight / 2.5,
        flexDirection: "row",

    },
    viewTitle: {
        padding: 10,
        marginLeft: 25,
    },
    viewDescription: {
        padding: 10,
        marginLeft: 40,

    },
    viewCalendar: {
        padding: 10,
        marginLeft: 40,
    },
    viewBack: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 50,
    },
    viewPicker: {
        justifyContent: "center",
        alignItems: "center",
        padding: 10,

    },
    viewFollow: {
        marginLeft: 'auto',
        borderRadius: 5,

        fontFamily: 'font-semi',
        color: Colors.secondary_gray,
        fontSize: 13,
    },
    viewTicket: {
        paddingTop: screenheight / 2.5,
        justifyContent: "center",
        alignItems: "center",
    },
    viewCard: {
        borderRadius: 5,
        backgroundColor: '#d4d4d4',
        color: Colors.traceTitle,
        padding: 8,
        justifyContent: "center",
        alignItems: "center",
        // width: screenWidth / 1.5,

    },
    viewPick: {
        flexDirection: 'row',
        paddingRight: 20,
    },
    viewSelect: {
        marginLeft: "auto",
        paddingTop: 28,
    },
    card: {
        width: screenWidth / 1.1,
        height: screenheight / 3,
        paddingLeft: screenWidth / 10.6,

    },
    item: {
        fontFamily: 'font-semi',
        color: Colors.traceTitle,
        fontSize: 13,
        padding: screenWidth / 18,
    },
    details: {
        fontFamily: 'font-regular',
        color: Colors.secondary_gray,
        fontSize: 12,
        padding: screenWidth / 18,
    },

    eventTitle: {
        fontFamily: 'font-bold',
        color: Colors.secondary_gray,
        fontSize: 20,
        paddingBottom: 10,

    },
    subTitle: {
        fontFamily: 'font-semi',
        color: Colors.secondary_gray,
        fontSize: 13,
        paddingTop: 20,

    },
    time: {
        fontFamily: 'font-regular',
        color: Colors.secondary_gray,
        fontSize: 13,
        paddingTop: 20,
    },
    subEvent: {
        fontFamily: 'font-semi',
        color: Colors.secondary_gray,
        fontSize: 13,
        paddingTop: 20,
        marginLeft: screenWidth / 6.5
    },
    description: {
        fontFamily: 'font-regular',
        color: Colors.secondary_gray,
        fontSize: 12,

    },
    calendar: {
        fontFamily: 'font-regular',
        color: Colors.traceTextColor,
        fontSize: 12,
    },
    icon: {
        // flexDirection: 'row',
        marginLeft: 'auto',
        paddingTop: 20,


    },
    backIcon: {
        padding: 20,

    },
    line: {
        borderBottomWidth: 0.2,
        borderBottomColor: Colors.secondary_gray,
        opacity: 0.4,
    },

    profile: {
        width: 80,
        height: 80,
        borderRadius: 90,
    },
    imageContainer: {
        flexDirection: 'row'
    },
    profileDescription: {
        marginLeft: 12,
        paddingTop: 5,

    },

    Form: {
        fontFamily: "font-bold",
        justifyContent: "center",
        alignItems: "center"
    },
    picker: {
        fontSize: 13,
        height: 35,
        width: 243,
        color: Colors.secondary_gray,
        borderColor: "#d4d4d4",
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        fontFamily: 'font-regular'
    },
    pick: {
        fontSize: 14,
        height: 10,
        width: 50,
        color: Colors.secondary_gray,
        borderColor: "#d4d4d4",
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,


    },
    image2: {
        marginLeft: 50,
        width: 77,
        height: 58,
        borderRadius: 5
    },
    image2details: {
        marginLeft: 10,
        paddingBottom: 30
    },
    all: {
        flexDirection: "row"
    },
    caption: {
        fontSize: 16,
        marginTop: 40,
        marginLeft: 30,
        paddingBottom: 10,
        fontFamily: 'font-semi',
        color: Colors.secondary_gray,
    },
    header: {
        position: "absolute",
    },
    container: {
        flex: 1,
        // marginTop: -20,
        backgroundColor: "#fff"
        // paddingBottom: 40,
      },
      upload: {
        borderWidth: 0.7,
        height: 40,
        width: 140,
        borderRadius: 5,
        marginLeft: 80,
        marginTop: 30,
        flexDirection: "row",
        backgroundColor: "#dae8de"
      },
      upIcon: {
        marginTop: 7,
        color: "#707070"
      },
      upText: {
        marginTop: 9,
        marginLeft: 10,
        color: "#707070",
        fontWeight: "bold"
      },
      reminder: {
        flexDirection: "row",
        //alignSelf: "center",
        marginLeft: 60,
        marginRight: 60,
        marginTop: 10,
        width: 180
      },
      remText: {
        fontSize: 11,
        textAlign: "center"
      },remIcon: {
        marginTop: 4,
        fontFamily: "sans-serif-condensed"
      }
})
