import React from 'react';
import {View, Text} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from "./AuthScreens/LoginScreen";
import RegisterScreen from "./AuthScreens/RegisterScreen";
import HomeScreen from "./HomeScreen"


const StackNavigator: React.FC = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default StackNavigator;

export type RootStackParamList = {
    Login: undefined;
    Register: undefined;
    Home: undefined
};
