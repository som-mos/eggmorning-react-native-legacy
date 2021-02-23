import { StyleSheet } from 'react-native'

const CommonStyle = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-start",
      },
      mainColor: {
        color:'#FFCE70'
      },
      backgroundColor: {
        backgroundColor:'#FFCE70'
      },
      backgroundColorContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: "flex-start",
        backgroundColor:'#FFCE70'
      },
      mainfont: {
        color: '#020202'
      },
      listText:{
        color:"#B0B0B0",
        fontWeight:'bold',
        fontSize: 16,
        padding:10
      },
      smallText: {
        color: "#6e7174",
        fontSize: 11,
        lineHeight: 12,
        textAlignVertical: "center"
      },
      nomalText: {
        color: "#000",
        fontSize: 14,
        lineHeight: 15,
        textAlignVertical: "top"
      },
      bigText: {
        color: "#000",
        fontSize: 20,
        fontWeight: "bold",
        height: 60,
      },
      textTitle: {
        height: 33,
        fontSize: 28,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#000000",
        marginBottom:10,
      },
      titleLine1:{
        width: 18,
        height: 1,
        borderBottomWidth:3,
        borderStyle: "solid",
        borderColor: "#FFCE70",
        marginLeft: 30,
        marginTop:50,
      },
      titleLine2:{
        width: 18,
        height: 1,
        borderBottomWidth:3,
        borderStyle: "solid",
        borderColor: "#FFCE70",
        marginLeft: 30,
      },
})

export default function getCommonStyle() {
    return CommonStyle;
}