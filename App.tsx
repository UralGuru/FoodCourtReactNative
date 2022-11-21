import React from "react";
import {StatusBar, View, Text} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from "./src/screens/AuthScreens/LoginScreen";
import {createSharedElementStackNavigator} from "react-navigation-shared-element";
import {Provider} from "react-redux";
import {store} from "./store";

const Stack = createSharedElementStackNavigator()


const MyStack = () => {

}

const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={"Login"} component={LoginScreen} />
        </Stack.Navigator>
    )
}

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <StatusBar />
            <AuthStack />
        </NavigationContainer>
    );
}

export default function App() {
    return (
        // <Provider store={store}>
            <RootNavigation />
        // </Provider>
    );
}
