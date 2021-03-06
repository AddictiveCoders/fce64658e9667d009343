/**
 * @developer :- Gaurav Addictive coders
 * @description:- main app navigation
 * @date: 15 sept 2020
 * @company :- Addictive Coders
 */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from "../screens/LandingScreen";
import PostDetailScreen from "../screens/PostDetailScreen";
const App = createStackNavigator();

const AppNavigation = () => {
    return (
        <App.Navigator>
            <App.Screen name="Landing" component={LandingScreen} options={{
                title: 'Post App',
                headerTitleStyle: {
                  color: '#fff'
                },
                headerStyle: {
                    backgroundColor: '#000'
                }
            }}/>
            <App.Screen name="PostDetail" component={PostDetailScreen} options={{
                title: 'Post App',
                headerTitleStyle: {
                    color: '#fff'
                },
                headerStyle: {
                    backgroundColor: '#000'
                }
            }}/>
        </App.Navigator>
    );
};

export default AppNavigation;
