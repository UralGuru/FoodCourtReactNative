import React, {useState} from 'react';
import {KeyboardAvoidingView, Pressable, SafeAreaView, Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {Input} from "@rneui/base";
import {COLORS, SIZES} from "../../constants/themes";

import AuthService from "../../api/auth"

const RegisterScreen: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();


    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.black, padding: 10, alignItems: 'center'}}>
            <KeyboardAvoidingView>
                <Text style={{textAlign: 'center', justifyContent: 'space-between', color: 'white'}}>
                    RegisterScreen
                </Text>

                <View style={{width: 320, marginTop: 45}}>
                    <Input placeholder={'name'}
                           value={name}
                           onChangeText={(text => setName(text))}
                           placeholderTextColor={'white'}
                           inputContainerStyle={{borderBottomWidth: 0}}
                           style={{width: 330, padding: 15, borderRadius: 5, backgroundColor: 'grey', color: 'white'}}/>

                    <Input placeholder={'email'}
                           value={email}
                           onChangeText={(text => setEmail(text))}
                           placeholderTextColor={'white'}
                           inputContainerStyle={{borderBottomWidth: 0}}
                           style={{width: 330, padding: 15, borderRadius: 5, backgroundColor: 'grey', color: 'white'}}/>

                    <Input placeholder={'phone'}
                           value={phone}
                           onChangeText={(text => setPhone(text))}
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
                        }}>
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 19,
                        fontWeight: '700',
                        color: 'white'
                    }} onPress={()=> AuthService.register(name,  email, phone,  password)}>
                        Register
                    </Text>
                </Pressable>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default RegisterScreen;
