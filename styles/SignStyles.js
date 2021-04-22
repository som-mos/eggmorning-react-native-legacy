import { StyleSheet } from 'react-native'


const signInScreenStyle = StyleSheet.create({

  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  logoImgContainer: {
    position:'relative',
    alignItems: 'center',
    height: '25%',
    maxHeight:160,
    flex:2,
  }, 
  logoImage: {
    width:200,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  logoImageT:{
    marginLeft: -10,
    color:"#ffffff",
    fontSize:20,
    fontWeight:'600'
  },
   signInBottomContainer: {
    alignItems: 'center',
    justifyContent:'center',
    height:'80%',
    width:'100%',
    margin:0,
    padding:0,
    flex:2,
    backgroundColor:'#fff',
    borderTopLeftRadius:50,
    borderTopRightRadius:50
  },
  codeHighlightContainer: {
    // marginBottom:20
  },
  inputWrapper:{
    height: 46,
    width: '100%',
    marginTop:20,
    borderBottomColor: 'rgba(0,0,0,0.07)',
    borderBottomWidth: 200,
    borderBottomWidth: 1,
    overflow: 'hidden',
  },
  textInputStyle: {
    lineHeight:20,
    height:26,
    textAlignVertical: 'center',
    textAlign: 'left',
    width:'80%',
  },
  inputStyle: {
    height:30,
    width:120,
    marginLeft: 15,
    borderBottomColor: 'gray',
    borderBottomWidth: 200,
    borderBottomWidth: 1,
  },
  signInRows: {
    flex:1,
    flexDirection:"row",
    paddingLeft:10,
    paddingRight:10
  },
  warningText:{
    color:"#ff5e92",
    fontSize:12,
    marginTop:15,
    alignSelf:"center",
  },
  signUp:{
    color:"#7a7a7a",
    fontSize:12,
    marginBottom:"10%",
  },
  signUpBt:{
    color:"#7a7a7a",
    fontSize:14,
    fontWeight:"600",
  },
  signInBt:{
    height: 50,
    width: 250,
    backgroundColor:"#FFCE70",
    borderRadius:8,
    // marginTop:35,
    alignItems: "center",
    padding: 10,
  },
  signInBtTxt:{
    color:"#fff",
    fontSize:20, 
    fontWeight:"400",
    textAlignVertical:"center",
    paddingTop: 3,
  },
  labelSt:{
    color:"#bebbbf",
    fontSize:14
  },
developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
},
contentContainer: {
    paddingTop: 30,
},
logoImgContainer: {
    position:'relative',
    alignItems: 'center',
    marginTop: 50,
    height: '30%',
    maxHeight:180,
    flex:2,
},
logoImage: {
    width:200,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
},
logoImageT:{
    marginLeft: -10,
},
signInBottomContainer: {
    alignItems: 'center',
    bottom:0,
    height:'85%',
    width:'100%',
    margin:0,
    padding:0,
    flex:2,
    backgroundColor:'#fff',
    borderTopLeftRadius:50,
    borderTopRightRadius:50
},
signUpScreenFilename: {
    paddingVertical: 14,
},
codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
},
codeHighlightContainer: {
    paddingHorizontal: 10,
},
getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
},
signInText:{
    fontSize: 20,
    color:"#7a7a7a",
    fontWeight:'600',
    marginTop:30,
    marginBottom:20
},
tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
},
navigationFilename: {
    marginTop: 5,
},
inputText: {
    width:30,
    lineHeight:30,
    height:30,
    textAlignVertical: 'center',
    textAlign: 'right',
},
inputStyle: {
    height:30,
    width:120,
    marginLeft: 15,
    borderBottomColor: 'gray',
    borderBottomWidth: 200,
    borderBottomWidth: 1,
},
signInRows: {
    maxHeight: 60,
    width: '100%',
},
signUpRows:{
    maxHeight: 60,
    width: '100%',
},
signupBt:{
    height: 50,
    width: 250,
    backgroundColor:"#FFCE70",
    borderRadius:8,
    marginTop:35,
    alignItems: "center",
    padding: 10,
},
signupBtTxt:{
    color:"#fff",
    fontSize:20,
    fontWeight:"400",
},
errMsg: {
  color:"#c0524c",
  fontSize:12,
},
radioBt: {
    marginLeft:15,
    marginRight:15,
    marginTop:25,
    marginBottom:0,
},

});


export default function getStyleSheet() {
        return signInScreenStyle;

}