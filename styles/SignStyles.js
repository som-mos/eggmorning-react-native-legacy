import { StyleSheet } from 'react-native'


// signin 과 signup을 함께 관리하는 스타일시트. switch문을 이용하여 적용시킬 스타일 케이스를 선언하면 원하는 스타일을 입힐 수 있다.

const SignInScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFCE70',
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
    height: '25%',
    maxHeight:160,
    flex:1,
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
   SignInBottomContainer: {
    alignItems: 'center',
    height:'75%',
    width:'100%',
    margin:0,
    padding:0,
    flex:2,
    backgroundColor:'#fff',
    borderTopLeftRadius:50,
    borderTopRightRadius:50
  },
  SignInText:{
    fontSize: 20,
    color:"#7a7a7a",
    fontWeight:'600',
    marginTop:"12%"
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
  SignInRows: {
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
    display:'none'
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
  SignInBt:{
    height: 50,
    width: 250,
    backgroundColor:"#FFCE70",
    borderRadius:8,
    // marginTop:35,
    alignItems: "center",
    padding: 10,
  },
  SignInBtTxt:{
    color:"#fff",
    fontSize:20, 
    fontWeight:"400",
    textAlignVertical:"center",
    paddingTop: 3,
  },
  labelSt:{
    color:"#bebbbf"
  }
});



const SignUpScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFCE70',
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
SignInBottomContainer: {
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
SignInText:{
    fontSize: 20,
    color:"#7a7a7a",
    fontWeight:'600',
    marginTop:30
},
tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
        ios: {
            shadowColor: 'black',
            shadowOffset: { width: 0, height: -3 },
            shadowOpacity: 0.1,
            shadowRadius: 3,
        },
        android: {
            elevation: 20,
        },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
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
SignInRows: {
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
    // marginBottom:25,
    alignItems: "center",
    padding: 10,
},
signupBtTxt:{
    color:"#fff",
    fontSize:20,
    fontWeight:"400",
},
labelSt:{
    color:"#bebbbf"
},
titleSt:{
    color:"#bebbbf",
    fontSize:16,
},
radioBt: {
    // flex: 1,
    marginLeft:15,
    marginRight: 15,
    marginTop:25,
    marginBottom:0,
}
});


export default function getStyleSheet(screenType) {
    switch (screenType) {
      case 'signin':
        return SignInScreenStyle;
      case 'signup':
        return SignUpScreenStyle; 
    }
}