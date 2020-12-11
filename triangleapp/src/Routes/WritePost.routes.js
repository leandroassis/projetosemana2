import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Feed from "../Pages/Feed";
import WritePost from "../Pages/WritePost"
import WritePostSurvey from "../Pages/WritePostSurvey"
import Profile from '../Pages/Profile'

const Stack = createStackNavigator();

export default function FeedToWritePost(){
    return(
            <Stack.Navigator>
                <Stack.Screen name="Feed" component={Feed}/>
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Postar" component={WritePost}  options={{
                   headerShown:false
                }} />
                <Stack.Screen name="WritePostSurvey" component={WritePostSurvey} options={{
                   headerShown:false
                }}/>
            </Stack.Navigator>
    );
}