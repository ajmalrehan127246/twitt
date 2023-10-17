//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet,TouchableOpacity,TextInput } from 'react-native';
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';
import  Icon  from 'react-native-vector-icons/AntDesign';
import  Icon1 from 'react-native-vector-icons/Ionicons';
// create a component
const SMACircles = () => {
    const [Show, setShow] = useState(true);
    return (
        <View style={styles.container}>
            
            <View style={{flexDirection:'row',marginTop:'15%'}}>
                <TouchableOpacity onPress={()=> setShow(true)}>
            <Text style={{ 
                marginLeft:'17%',
                fontSize:20,
                fontWeight:'bold',
                borderBottomWidth:3,
                borderColor:Show === true ? 'blue' :'#fff',
                color:'black'}} >SMA Circle</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> setShow(false)}>
            <Text style={{ 
                marginLeft:'15%',
                fontSize:20,
                fontWeight:'bold',
                borderBottomWidth:3,
                borderColor:Show === false ? 'blue' :'#fff',
                // backgroundColor:Show === false ? '#63c3bb' :'#fff',
                color:'black'}}>Recommended</Text>
            </TouchableOpacity>
            </View>
           {Show === true ? (
            <View style={{marginTop:'15%'}}>
                <Text style={{ marginLeft:'4%',fontSize:17,fontWeight:'bold'}}>People won't be notified when you edit your twitter circle. Anyone you add will be able to see your previous twitter circle Tweets.</Text>
            </View>
           ):(
            <View style={styles.container}>
            <View style={{
                flexDirection:'row',
                 marginTop:'15%',
                 marginLeft:'5%',
                 width:'90%',
                 height:h('6%'),
                 borderColor:'grey',
                 borderWidth:2,
                //  backgroundColor:'blue',
                 borderRadius:25,
                 }}>
                    <Icon style={{marginLeft:'3%',marginTop:'2%'}} name='search1' size={30}/>
                <TextInput placeholder='Search People' style={{
                    width:'85%',
                    height:h('6%'),
                    borderColor:'grey',
                    // borderWidth:2,
                    // borderRadius:25,
                    // backgroundColor:'red',
                    fontSize:22,
                }}/>
                
                
            </View >

         <View style={{marginTop:'5%'}}>
          <Text style={{ marginLeft:'5%',fontSize:18,fontWeight:'bold'}}>People won't be notified when you edit your twitter circle. Anyone you add will be able to see your previous twitter circle Tweets.</Text>
         </View>
        </View>
           )}
               
               
           
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'white',
    },
});

//make this component available to the app
export default SMACircles;
