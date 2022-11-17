import React from "react";
import {StatusBar, View, Text} from "react-native";
import {SIZES, COLORS, FONTS} from "./constants/themes";
import StackNavigator from "./screens/StackNavigator";


export default function App() {
    return (
        <>
            <StatusBar />
            <StackNavigator/>

        </>
    );
}

