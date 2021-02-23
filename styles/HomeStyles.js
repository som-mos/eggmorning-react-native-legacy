import { StyleSheet } from 'react-native'

const HomeScreenStyle = StyleSheet.create({
      scrollContainer: {
        flex: 1,
        height: 470,
        justifyContent: "center",
        marginTop:10,
        paddingLeft: 25,
      },
      ImgBg: {
        height:440,
        borderRadius:12,
        alignContent:"center",
        overflow: "hidden",
      },
      textContainer: {
        backgroundColor: "rgba(255,255,255, 0.6)",
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 12,
        width:"82%",
        height: 125,
        bottom: 25,
        position: "absolute",
        alignSelf: "center",
      },
      slideBt:{
        backgroundColor: "transparent",
        width: 96,
        height: 50,
        position:"absolute",
        bottom:-15,
        right:-15
      },  
      imageuser:{
        width: 36, 
        height: 36, 
        borderRadius: 50
      },
      userInfo1:{
        flex:1,
        height: 40,
        width:"25%",
        maxWidth: 42,
      },
      userInfo2:{
        height: 36,
        alignSelf: "flex-start",
        flex:1,
        width:"75%",
        overflow:"hidden",
      },
      userRows: {
        width: "70%",
        height:12,
        flex:1,
        maxWidth:100,
      },
      normalDot: {
        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: "silver",
        marginHorizontal: 4
      },
      topThumb:{
        borderRadius: 12, width:76, height:76
      },
      ratingView:{
        flexDirection: "row",
        height: 20,
        alignItems: "center",
        marginLeft:10,
        marginTop:10
      },
      ratingText:{
        color:"#7a7a7a",
        paddingTop:2
      },
      red:{ color:"red",
      fontSize:18,
      marginRight:10,
      fontWeight:"bold",},
      yellow:{ color:"orange",
      fontSize:18,
      marginRight:10,
      fontWeight:"bold",},
      green:{ color:"green",
      fontSize:18,
      marginRight:10,
      fontWeight:"bold",},
      blue:{ color:"blue",
      fontSize:18,
      marginRight:10,
      fontWeight:"bold",},
      purple:{ color:"purple",
      fontSize:18,
      marginRight:10,
      fontWeight:"bold",},
      activeIcon: {
        borderColor: '#F2B04C',
        borderWidth: 0,
        borderTopWidth:3,
      },
      nomalIcon: {
        borderColor: '#F2B04C',
        borderWidth: 0,
      }
})

export default function getStyleSheet() {
    return HomeScreenStyle;
}