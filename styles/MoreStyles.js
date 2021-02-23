import { StyleSheet, Dimensions } from 'react-native'

const pageHeight2 = Dimensions.get("window").height;

const MoreScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFCE70',
    height: pageHeight2,
  },
  topContainer: {
    position:'relative',
    alignItems: 'center',
    marginTop: '-4%',
    height:'5%',
    maxHeight: pageHeight2 * 0.15,
    flex:1,
  },
  moreTitle:{
    padding:'14%',
    color:"#ffffff",
    fontSize:24,
    fontWeight:'bold',
    alignSelf: 'center'
  },
   moreBottomContainer: {
    alignItems: 'flex-end',
    justifyContent:'center',
    margin:0,
    flex:2,
    height:'95%',
    backgroundColor:'#fff',
    borderTopLeftRadius:50,
  },
  moreList:{
    color:"#B0B0B0",
    fontWeight:'bold',
    fontSize: 24,
    paddingTop:'1rem',
    paddingBottom:'1rem',
  }
})

export default function getStyleSheet() {
    return MoreScreenStyle;
}