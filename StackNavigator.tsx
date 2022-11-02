import React from 'react';
import {View, Text} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from "./screens/AuthScreens/LoginScreen";
import RegisterScreen from "./screens/AuthScreens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen"


const StackNavigator: React.FC = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default StackNavigator;
