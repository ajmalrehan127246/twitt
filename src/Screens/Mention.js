//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const Mentions = () => {
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
export default Mentions;
