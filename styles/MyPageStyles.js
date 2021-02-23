import { StyleSheet } from 'react-native'

const MyPageScreenStyle = StyleSheet.create({
  contentContainer: {
    paddingTop: 30,
  },
  topContainer: {
    position:'relative',
    alignItems: 'center',
    height: '25%',
    maxHeight:180,
    flex:1,
  }, 
  userImage:{
    marginTop:-10,
    width: 110, 
    height: 110, 
    borderRadius: 50
  },
  userName:{
    color:"#ffffff",
    fontSize:20,
    fontWeight:'bold',
    marginTop:'3.5%',
  },
   myBottomContainer: {
    alignItems: 'center',
    height:'75%',
    width:'100%',
    margin:0,
    flex:2,
    backgroundColor:'#fff',
    borderTopLeftRadius:50,
  },
  listStyle: {
    width:'100%',
    height:'80%',
    justifyContent:'center',
  },
  SignInBt:{
    height: 40,
    width: 80,
    backgroundColor:"#FFCE70",
    borderRadius:8,
    alignItems: "center",
    padding: 5,
  },
  SignInBtTxt:{
    color:"#fff",
    fontSize:20, 
    fontWeight:"400",
    textAlignVertical:"center",
    paddingTop: 3,
  }
});

export default function getStyleSheet() {
    return MyPageScreenStyle;
}