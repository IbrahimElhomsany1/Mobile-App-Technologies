import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { useState } from 'react'
import Item from './Item'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const myFontSize = windowWidth*0.04
const Items = () => {
    const [db,setDb] = useState([
        {name:'Laptop',price:1000,img:require('../assets/laptop.jpeg'),qty:0},
         {name:'Mouse',price:500,img:require('../assets/mouse.jpeg'),qty:0},
          {name:'Keyboard',price:200,img:require('../assets/keyboard.jpeg'),qty:0},
           {name:'Screen',price:700,img:require('../assets/screen.jpeg'),qty:0},
    ])
const [saved,setSaved] = useState(0)
const [total,setTotal] = useState(0)
    const inc = (index)=> {
      let temp = [...db]
      temp[index].qty = temp[index].qty+1
      setDb([...temp])
       findTotal()

    }
    const dec = (index)=> {
      if(db[index].qty==0) return
      let temp = [...db]
      temp[index].qty = temp[index].qty-1
      setDb([...temp])
 findTotal()
    }
    const findTotal = ()=> {
     let itemDiscAmount = 0
     let itemObj = db.find((x,i)=> x.name=='Laptop' && x.qty>=5) 
     
   
     let total= db.reduce((acc,cur)=> acc+ cur.qty*cur.price,0)
     let totalQty = db.reduce((acc,cur)=>acc+cur.qty,0)
     itemObj?itemDiscAmount=total*0.05: null
      
     if(totalQty>=10){
       setSaved(total*0.1 + itemDiscAmount)
      setTotal(total*0.9 - itemDiscAmount)
     }
     else setTotal(total)
      
    }
    
  return (
    <View style={styles.container}>
        {db.map((x,i)=> <Item key={i} price={x.price} img = {x.img} 
        qty={x.qty} inc={()=>inc(i)} dec={()=>dec(i)}/>)}
     
          
          { saved>=10?
           <Text style={styles.txt}>Total = {total}  You saved: {saved} </Text>
           : <Text style={styles.txt}>Total = {total} </Text>
}
     
     
    </View>
  )
}

export default Items

const styles = StyleSheet.create({
     container:{
        flex:1,
        justifyContent:'center',
        margin:'1%'

    },
    txt:{fontSize:myFontSize}
})