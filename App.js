/**
 * @developer :- Gaurav Addictive coders
 * @description:- main App component
 * @date: 15 sept 2020
 * @company :- Addictive Coders
 */

import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from "./src/navigation/AppNavigation";
import { Provider as PaperProvider } from 'react-native-paper';

const App = () => {
    return (
        <PaperProvider>
            <NavigationContainer>
                <AppNavigation />
            </NavigationContainer>
        </PaperProvider>
    );
};

export default App;
