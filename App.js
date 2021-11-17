import { StatusBar } from 'expo-status-bar';
import React,{ useState } from 'react';
import { Button,Alert, Image,SafeAreaView, ScrollView, StyleSheet, TextInput, View,FlatList, Pressable, ToastAndroid } from 'react-native';
import Text from './Text'
export default function App() {
  const [count, setCount] = useState(0);
  const [name,setName]=useState('')
  const students=[
    {name:'Harika',key:'1',loc:'clx'},
    {name:'siri',key:'2',loc:'clx'},
    {name:'mani',key:'3',loc:'clx'},
    {name:'Harika',key:'4',loc:'clx'},
    {name:'siri',key:'5',loc:'clx'},
    {name:'mani',key:'6',loc:'clx'}, 
    {name:'siva',key:'7',loc:'clx'},
    {name:'Ram',key:'8',loc:'clx'},
    {name:'Ravi',key:'9',loc:'clx'},
  ]
  const handlepress=()=>{
    setCount(count+1);
  }
  return (
    <View style={styles.container}>
    
       <Image source={{uri:"https://www.abvt.com.au/wp-content/uploads/2020/10/react-native-logo-web.png"}} style={styles.fitImage}/>
       <TextInput placeholder="Enter Mobile No" style={{top:40,borderColor:'grey',width:200,margin:20,padding:20}} keyboardType='numeric' onChangeText={(val)=>setName(val)} />
       <Text>Mobile no is {name}</Text>
       <Pressable style={{margin:10}}
               onPress={() => Alert.alert('Alert API',"you have clicked on button",[{text:'OK',onPress:()=>console.warn("you have clicked on OK")},{text:'CANCEL'}])}>
             <Text>You can press me</Text>
      </Pressable>
      <Pressable onPress={()=>ToastAndroid.showWithGravity("this is for testing of toast messages",ToastAndroid.SHORT,ToastAndroid.CENTER)}><Text>Click for Toast message</Text></Pressable>
      <FlatList data={students}
             keyExtractor={(item)=>item.key}
          renderItem={({item})=>(
            <View>
            <Text style={{backgroundColor:'pink',fontSize:40,margin:10}}>{item.name}-{item.loc}</Text>
            </View>
          )} />

    {/* <ScrollView style={styles.container}>
      {
           students.map(item=>(
               <View key={item.key}>
               <Text style={{backgroundColor:'pink',fontSize:40,padding:20,margin:10}}>{item.name}</Text>
               </View>
           ))}
        </ScrollView> */}
      const tstyle={{backgroundColor:'yellow'}}

      <Text>Open up App.js to start working on your app!</Text>
      <Text>First App</Text>
      <Image style={{width:200,height:200}} source={require('./assets/icon.png')}/>
      <Button style={{tstyle}} onPress={handlepress} title="Click me!"/>
      <Text>You have clicked {count} times</Text>
      <TextInput style={{borderColor:'grey',padding:8,borderWidth:1,width:200}} 
      onChangeText={(val)=>setName(val)}
      placeholder="Enter your name" />
      <Text>{name}</Text>      
      <Button title="click" onPress={()=>alert("Clicked")}/> 
      </View>
  )}
    
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingHorizontal:20,
    top:50
  },
  fitImage: {
    height: 45,
    width: 45,
    borderRadius:45/2  
  },
});




