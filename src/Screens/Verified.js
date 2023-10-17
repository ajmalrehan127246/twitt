//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
const Verifieds = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          marginTop: '70%',
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
         
        }}>account, you’ll find it here. Learn more</Text>

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
export default Verifieds;
