import { StyleSheet, Dimensions } from 'react-native'

// const pageWidth = Dimensions.get("window").width;
// const pageHeight = Dimensions.get("window").height;

const BookMarkStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  scrollContainer: {
    flex: 1,
    height: 470,
    justifyContent: "center",
    marginTop:10,
    paddingLeft: 25,
  },
  topListContainer: {
    flex: 1,
    marginTop:20,
  },
  imageView:{
    margin:10 
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
  listTitle:{
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: 0,
    color: "#000000",
  },
  listText:{
    fontSize: 14,
    fontWeight: "400",
    letterSpacing: 0,
    color: "#7A7A7A",
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
  topThumb:{
    borderRadius: 12, width:76, height:76
  },
  ratingView:{
    flexDirection: "row",
    height: 12,
    alignSelf:"baseline",
    marginLeft:20,
    marginTop:10
  },
  ratingText:{
    color:"#7a7a7a",
    paddingTop:2,
    fontSize:12,
  },
  activeIcon: {
    borderColor: '#F2B04C',
    borderWidth: 0,
    borderTopWidth:3,
  },
  nomalIcon: {
    borderColor: '#F2B04C',
    borderWidth: 0,
  },
  listItem:{
    paddingTop:15,
    paddingBottom:15,
    width:'100%',

  }
})

export default function getStyleSheet() {
    return BookMarkStyles;
}