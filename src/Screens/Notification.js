//import liraries
import React, {useState} from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';


// create a component
const Notifications = ({navigation}) => {
   const [Show, setShow] = useState('All');
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row',marginTop:'5%',marginLeft:'5%', borderBottomWidth:1,
                borderColor:'grey', height:'8%',
}}>
        
       <TouchableOpacity onPress={()=>setShow('All')}>
      <Text style={{marginTop:'3%',
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: '12%',
    color: 'black',
    borderBottomWidth:3,
    borderColor:Show === 'All' ? '#394F2A' :'#fff',}}>All</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>setShow('Verified')}>
        <Text style={{ marginTop:'3%',
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: '25%',
    color: 'black',
    borderBottomWidth:3,
    borderColor:Show === 'Verified' ? '#394F2A' :'#fff',}}>Verified</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>setShow('Mention')}>
        <Text style={{ marginTop:'3%',
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: '13%',
    color: 'black',
    borderBottomWidth:3,
    borderColor:Show === 'Mention' ? '#394F2A' :'#fff',}}>Mentions</Text>
        </TouchableOpacity>
        </View>
     
      {(()=>{
        if(Show == 'All'){
          return(
            <View>

            <View style={{marginTop:'10%', height: h('19%'),borderBottomWidth:1,borderColor:'grey'}}>
            <Text  style={styles.txt3}>SHIB HOLDER</Text>
             <Text  style={styles.txt4}>BREAKING: The number one pakistan</Text>
            <Text  style={styles.txt4}>exchange has ranked $SHIB as its most</Text>
             <Text  style={styles.txt4}>popular coin of 2022!</Text>
           </View> 

           <View style={{marginTop:'8%', height: h('15%'),borderBottomWidth:1,borderColor:'grey'}}>
          
          <Text  style={styles.txt6}>There was a login to your account</Text>
          <Text  style={styles.txt6}>@doctor_diary__from a new Device</Text>
         <Text  style={styles.txt6}>on 21 Dec 2022. Review it Now.</Text>
     </View> 

     <View style={{marginTop:'6%', height: h('10%'),borderBottomWidth:1,borderColor:'grey'}}>
          
          <Text  style={styles.txt6}>Your contact <Text style={{color:'black'}}> Hafsa Umer</Text></Text>
          <Text  style={styles.txt6}>(@Hafsa27246) is on Twitter!</Text>
         
     </View> 

     </View>
           
          );
        }

        else if(Show == 'Verified'){
          return(
            <View style={styles.container}>
            <Text
              style={{
                marginTop: '50%',
                marginLeft: '8%',
                fontSize: 39,
                fontWeight: 'bold',
                color: 'black',
               
              }}>
              Nothing to see here - yet
            </Text>
            <Text  style={{
                marginTop: '5%',
                marginLeft: '8%',
                fontSize: 18,
                fontWeight: 'bold',
               
              }}>Likes, mentions, Retweets, and a whole</Text>
            <Text style={{
              //   marginTop: '5%',
                marginLeft: '8%',
                fontSize: 18,
                fontWeight: 'bold',
               
              }}>lot more— when it comes from a verified</Text>
            <Text style={{
              //   marginTop: '5%',
                marginLeft: '8%',
                fontSize: 18,
                fontWeight: 'bold',
               
              }}>account, you’ll find it here.<Text style={{color:'blue'}}> Learn more</Text></Text>
      
          </View>
          );
        }

        else if(Show == 'Mention'){
          return(
          <View style={{
            flex: 1,
            backgroundColor: 'white',}}>
            <Text
       style={{
         marginTop: '50%',
         marginLeft: '8%',
         fontSize: 39,
         fontWeight: 'bold',
         color: 'black',
       }}>
       Join the Conversation
     </Text>
     <Text style={{
         marginTop: '3%',
         marginLeft: '6%',
         fontSize: 18,
         fontWeight: 'bold',
        
       }}>When someone on Twitter mentions you in</Text>
     <Text style={{
       //   marginTop: '5%',
         marginLeft: '7%',
         fontSize: 18,
         fontWeight: 'bold',
        
       }}>a Tweet or reply.  you’ll find it here.</Text>
       </View>
          );
        }
        return null
        
      })()}

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
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'white',
  },
  // txt: {
  //   marginTop:'3%',
  //   fontSize: 22,
  //   fontWeight: 'bold',
  //   marginLeft: '12%',
  //   color: 'black',
  //   borderBottomWidth:3,
  //   borderColor:Show === 'All' ? 'blue' :'#fff',
  // },
  // txt1: {
  //   marginTop:'3%',
  //   fontSize: 22,
  //   fontWeight: 'bold',
  //   marginLeft: '20%',
  //   color: 'black',
  //   borderBottomWidth:3,
  //   borderColor:Show === 'Verified' ? 'blue' :'#fff',
  // },
  // txt2: {
  //   marginTop:'3%',
  //   fontSize: 22,
  //   fontWeight: 'bold',
  //   marginLeft: '13%',
  //   color: 'black',
  //   borderBottomWidth:3,
  //   borderColor:Show === 'Mention' ? 'blue' :'#fff',
  // },
  txt3: {
    marginTop:'3%',
    marginLeft:'5%',
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: '12%',
    color: 'black',
  },
  txt4: {
    marginTop:'1%',
    marginLeft:'5%',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: '12%',
    // color: 'black',
  },
  txt5: {
    marginTop:'1%',
    marginLeft:'5%',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: '12%',
    // color: 'black',
  },
  txt6:{
    marginTop:'1%',
    marginLeft:'5%',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: '12%',
  },
});

//make this component available to the app
export default Notifications;
