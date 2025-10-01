import { SafeAreaView, StyleSheet,Image ,Text, Dimensions, TextInput, View, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform, TouchableOpacity} from 'react-native';
import {useState} from 'react'


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const myFontSize = windowWidth*0.04

const Lab2 = () => {
  const [currImg, setCurrImg] = useState()
  const [index, setIndex] = useState(-1)
  const [animal, setAnimal] = useState()
  const images = [
    require('../assets/Horse.png'),
    require('../assets/dog.png'),
    require('../assets/wolf.png')

  ]

  const changeImg = (img) => {
    if ( img=="Horse"){
      setCurrImg(images[0])
      setIndex(0)
    }
    else if (img=="Dog") {
      setCurrImg(images[1])
      setIndex(1)
    }
      else if (img=="Wolf"){
        setCurrImg(images[2])
        setIndex(2)

      }
      else{
        setCurrImg()
        setIndex(-1)
      }
  }

  return (
    
    <SafeAreaView>
    <View style={styles.container}>

      <TouchableOpacity
      onPress={()=>{setIndex(0);setCurrImg(images[0])}}>
        <Text style={[styles.txt,index==0 && {textDecorationLine:'underline'}]}>Horse</Text>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={()=>{setIndex(1);setCurrImg(images[1])}}>
        <Text style={[styles.txt,{textDecorationLine:index==1?'underline':'none'}]}>Dog</Text>
      </TouchableOpacity>


      <TouchableOpacity
      onPress={()=>{setIndex(2);setCurrImg(images[2])}}>
        <Text style={[styles.txt,{textDecorationLine:index==2?'underline':'none'}]}>Wolf</Text>
      </TouchableOpacity>

    </View>

    <TextInput
    placeholder='type your animal name'
    onSubmitEditing={(event) =>changeImg(event.nativeEvent.text)}
    />

    <View style={{alignItems:'center', marginTop:windowHeight*0.1}}>
    <Image source={currImg} style={styles.img}/>
        
    </View>
  </SafeAreaView>
  );
}


export default Lab2

const styles = StyleSheet.create({
  
  container:{
    position:'absolute',
    top:0,
    left:0,
    right:0,
    flexDirection:"row",
    justifyContent:'space-evenly',
    alignItems:'center',
    paddingVertical:15,

  },

  txt:{
    fontSize:22,
    fontWeight:"bold",
    color:"black",

  },


  img:{
    width:400,
    height:400,
    resizeMode:'contain',
   
  },

})