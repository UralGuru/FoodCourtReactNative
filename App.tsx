import { StatusBar } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import store from "./redux/store";
import {Provider, useSelector} from "react-redux";
import {AuthStack} from "./src/screens/StackNavigator";
import HomeScreen from "./src/screens/HomeScreen";

const RootNavigation = () => {
    const isLoggedIn = useSelector(state => state.user.isLoggedIn)

    return (
        <NavigationContainer>
            <StatusBar />
            {isLoggedIn ? <HomeScreen /> : <AuthStack />}
        </NavigationContainer>
    );
}

export default function App() {
    return (
        <Provider store={store}>
            <RootNavigation />
        </Provider>
    );
}