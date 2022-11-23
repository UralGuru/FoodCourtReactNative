import LoginScreen from "./AuthScreens/LoginScreen";
import {createSharedElementStackNavigator} from "react-navigation-shared-element";
import RegisterScreen from "./AuthScreens/RegisterScreen";
import HomeScreen from "./HomeScreen";


const Stack = createSharedElementStackNavigator();

export const AppStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={"Home"} component={HomeScreen} />
        </Stack.Navigator>
    )
}


export const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={"Login"} component={LoginScreen} />
            <Stack.Screen name={"Register"} component={RegisterScreen} />
        </Stack.Navigator>
    )
}

export type RootStackParamList = {
    Login: undefined;
    Register: undefined;
    Home: undefined
};
