//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet,TouchableOpacity,TextInput,Alert,Image,StatusBar } from 'react-native';
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';
// import Signups from './Signup';
// import Homes from './Home';

// create a component
const Logins = ({navigation}) => {

           const [userName, setuserName] = useState("");
     const [password, setpassword] = useState("");

     const Submit=()=>{
        if(userName ==='' && password === '')
        {
            Alert.alert('Username And Password is Incorrect')
        }
        else if(userName ==='laiba' && password==='123')
        {
        //  Alert.alert(' You Are Successfully login')
         navigation.navigate('Drawer')
        }
        else{
            Alert.alert('Username And Password is Incorrect')
        }
     }
    
    return (
        <View style={styles.container}>
            <StatusBar hidden={true}/>
            {/* <Headers2/> */}
            <Image style={styles.img} source={require('../Assets/smagreen.png')}/>

            <Text style={styles.txt}>Email</Text>
            <TextInput style={styles.txtinput}
            value={userName}
            onChangeText={(txt)=>setuserName(txt)}/>

            <Text style={styles.txt1}>Password</Text>
            <TextInput style={styles.txtinput1}
            secureTextEntry={true}
            value={password}
            onChangeText={(txt)=>setpassword(txt)}/>
            <Text style={styles.txt2}>Forgotton Password ?</Text>

            
            <TouchableOpacity onPress={()=>Submit()}>
                <View style={styles.box}>
            <Text style={styles.txt3}>Login</Text>
            </View>
            </TouchableOpacity>
          
           
            
            
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
    img:{
        marginLeft:'1%',
        marginTop:'25%',
        width:'90%',
        height:h('23%'),
        // resizeMode:'contain'
        // backgroundColor:'red'
    },
    txt:{
        marginTop:'7%',
        marginLeft:'18%',
        fontSize:20,
         color:'green',

    },
    txtinput:{
        marginTop:'4%',
        marginLeft:'15%',
        width:'70%',
        height:h('7%'),
        // borderWidth:2,
        // borderColor:'white',
        borderRadius:17,
        backgroundColor:'#3b3c3c',
        textAlign:'center',
        color:'white',
        fontSize:20,
      

    },
    txt1:{
        marginTop:'5%',
        marginLeft:'15%',
        fontSize:20,
         color:'green',

    },
    txtinput1:{
        marginTop:'4%',
        marginLeft:'15%',
        width:'70%',
        height:h('7%'),
        // borderWidth:2,
        // borderColor:'white',
        borderRadius:17,
        backgroundColor:'#3b3c3c',
        textAlign:'center',
        color:'white',
        fontSize:20,
      

    },
    txt2:{
        marginTop:'4%',
        marginLeft:'38%',
        fontSize:18,
         color:'green',

    },
    box:{
        width:'40%',
        height:h('5%'),
        marginTop:'15%',
        marginLeft:'30%',
        borderWidth:3,
        borderColor:'green',
        backgroundColor:'green',
        borderRadius:12,
    },
    txt3:{
       
        fontSize:20,
         color:'white',
         textAlign:'center',
        
       

    },

});

//make this component available to the app
export default Logins;
