
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
        paddingLeft: 15,
    },

    viewFollow: {
        backgroundColor: '#dddddd',
        marginLeft: 'auto',
        borderRadius: 5,
        padding: 5,
        fontFamily: 'font-semi',
        color: Colors.secondary_gray,
        fontSize: 13,
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
        flexDirection: 'row',
        marginLeft: 'auto',
        padding: 20,

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
})
