//import liraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Logins from '../Screens/Login';
import Signups from '../Screens/Signup';
import Homes from '../Screens/Home';
import Searchs from '../Screens/Search';
import Notifications from '../Screens/Notification';
import { MyDrawer } from './Drawer';
import Profiles from '../Screens/Profile';
import { Tabs } from './BottomNavigation';
import Profiles1 from '../Screens/Profile1';
import Recommendeds from '../Screens/Recommended';
import Topics from '../Screens/Topic';
import Suggesteds from '../Screens/Suggested';
import Notinteresteds from '../Screens/Notinterested';
import Bookmarks from '../Screens/Bookmark';
import Lists from '../Screens/List';
import SMACircles from '../Screens/SMACircle';
import ProfessionalTools from '../Screens/ProfessionalTool';
import Setting from '../Screens/Settings';
import Chats from '../Screens/Chat';
import Laibakhan from '../Screens/Laiba';
import Verifieds from '../Screens/Verified';
import Mentions from '../Screens/Mention';
import EditProfile from '../Screens/Editprofile';
import Tweets from '../Screens/Tweet';
import Replies from '../Screens/Replie';
import Medias from '../Screens/Media';
import Likes from '../Screens/Like';





const Stack=createStackNavigator();


export function StackNavigator() {
    return (
        <View style={{flex:1}}>
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Profile'>
                <Stack.Screen
                name='Profile'
                component={Profiles}
                options={{headerShown:false}}/>
                <Stack.Screen 
                name='Login'
                component={Logins}
                options={{headerShown:true}}/>
                <Stack.Screen
                name='Drawer'
                component={MyDrawer}
                options={{headerShown:false}}/>
               <Stack.Screen
               name='Bottom'
               component={Tabs}/>
                
                <Stack.Screen
                name='Home'
                component={Homes}
                options={{headerShown:false}}/>
                 <Stack.Screen
                name='Search'
                component={Searchs}
                options={{headerShown:false}}/>
                 <Stack.Screen
                name='Notification'
                component={Notifications}
                options={{headerShown:false}}/>
                <Stack.Screen
                name='Signup'
                component={Signups}
                options={{headerShown:true}}/>
                <Stack.Screen
                name='Profile1'
                component={Profiles1}
                options={{headerShown:false}}/>
                <Stack.Screen
                name='SMACircle'
                component={SMACircles}
                options={{headerShown:true}}/>
                 
                <Stack.Screen
                name='Recommended'
                component={Recommendeds}
                options={{headerShown:false}}/>
                 <Stack.Screen
                name='Topic'
                component={Topics}
                options={{headerShown:true}}/>
                 <Stack.Screen
                name='Suggested'
                component={Suggesteds}
                options={{headerShown:false}}/>
                 <Stack.Screen
                name='Notinterested'
                component={Notinteresteds}
                options={{headerShown:true}}/>
                <Stack.Screen
                name='Bookmark'
                component={Bookmarks}
                options={{headerShown:true}}/>
                <Stack.Screen
                name='List'
                component={Lists}
                options={{headerShown:true}}/>
                <Stack.Screen
                name='ProfessionalTool'
                component={ProfessionalTools}
                options={{headerShown:true}}/>
                <Stack.Screen
                name='Settings'
                component={Setting}
                options={{headerShown:true}}/>
                <Stack.Screen
                name='Chat'
                component={Chats}
                options={{headerShown:true}}/>
                <Stack.Screen
                name='Laiba'
                component={Laibakhan}
                options={{headerShown:false}}/>
                 <Stack.Screen
                name='Verified'
                component={Verifieds}
                options={{headerShown:false}}/>
                 <Stack.Screen
                name='Mention'
                component={Mentions}
                options={{headerShown:false}}/>
                  <Stack.Screen
                name='Editprofile'
                component={EditProfile}
                options={{headerShown:true}}/>
                 <Stack.Screen
                name='Tweet'
                component={Tweets}
                options={{headerShown:true}}/>
                 <Stack.Screen
                name='Replie'
                component={Replies}
                options={{headerShown:true}}/>
                 <Stack.Screen
                name='Media'
                component={Medias}
                options={{headerShown:true}}/>
                 <Stack.Screen
                name='Like'
                component={Likes}
                options={{headerShown:true}}/>


            </Stack.Navigator>
        </NavigationContainer>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

