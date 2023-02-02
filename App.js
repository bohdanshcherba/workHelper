import React from "react";

import {NavigationContainer} from '@react-navigation/native';
// import * as NavigationBar from 'expo-navigation-bar';
import {Navigation} from './src/navigation/Navigation'
import {Provider} from "react-redux";
import {Store} from "./src/store/store";
import {COLORS} from "./src/assets/colors";
import 'react-native-gesture-handler';
import {View} from "react-native";

export default function App() {
    // NavigationBar.setBackgroundColorAsync(COLORS.MAIN_COLOR);

    return (
        <NavigationContainer>
            <Provider store={Store}>

                <Navigation/>


            </Provider>

        </NavigationContainer>
    );
}


