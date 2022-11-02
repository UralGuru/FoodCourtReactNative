import React, {useState} from 'react';
import {Text, View, SafeAreaView, KeyboardAvoidingView, Pressable} from "react-native";
import {Input} from '@rneui/base';
import {useNavigation} from "@react-navigation/native";

const LoginScreen: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();




    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'black', padding: 10, alignItems: 'center'}}>
            <KeyboardAvoidingView>
                <Text style={{textAlign: 'center', justifyContent: 'space-between', color: 'red'}}>
                    LoginScreen
                </Text>

                <View style={{width: 320, marginTop: 45}}>
                    <Input placeholder={'email'}
                           value={email}
                           onChangeText={(text => setEmail(text))}
                           placeholderTextColor={'white'}
                           inputContainerStyle={{borderBottomWidth: 0}}
                           style={{width: 330, padding: 15, borderRadius: 5, backgroundColor: 'grey', color: 'white'}}/>

                    <Input placeholder={'password'}
                           value={password}
                           onChangeText={(text => setPassword(text))}
                           secureTextEntry={true}
                           placeholderTextColor={'white'}
                           inputContainerStyle={{borderBottomWidth: 0}}
                           style={{width: 330, padding: 15, borderRadius: 5, backgroundColor: 'grey', color: 'white'}}/>
                </View>

                <Pressable style={
                    password.length > 4
                        ? {
                            width: 300,
                            backgroundColor: 'red',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderColor: 'white',
                            borderWidth: 2,
                            padding: 14
                        }
                        :
                        {
                            width: 300,
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderColor: 'white',
                            borderWidth: 2,
                            padding: 14
                        }}
                           onPress={()=> navigation.navigate('Profile')}>
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 19,
                        fontWeight: '700',
                        color: 'white'
                    }}>
                        Sign In
                    </Text>
                </Pressable>

                <Pressable onPress={()=> navigation.navigate('Register')}>
                    <Text style={{
                        textAlign: 'center',
                        color: 'white',
                        fontSize: 19,
                        fontWeight: '600',
                        marginTop: 15
                    }}>
                        New to MyApp? Sign up now
                    </Text>
                </Pressable>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default LoginScreen;
