import React, {useState} from 'react';
import {KeyboardAvoidingView, Pressable, SafeAreaView, Text, View, StyleSheet} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {Input} from "@rneui/base";
import {COLORS, SIZES} from "../../constants/themes";
import { AntDesign } from '@expo/vector-icons';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import AuthService from "../../api/auth.service"
// import InputAuth from "../../components/inputLabel/inputAuth";

const RegisterScreen: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const validationSchema = () => {
        return Yup.object().shape({
            fullname: Yup.string().required('Fullname is required'),
            username: Yup.string()
                .required('Username is required')
                .min(6, 'Username must be at least 6 characters')
                .max(20, 'Username must not exceed 20 characters'),
            email: Yup.string()
                .required('Email is required')
                .email('Email is invalid'),
            password: Yup.string()
                .required('Password is required')
                .min(6, 'Password must be at least 6 characters')
                .max(40, 'Password must not exceed 40 characters'),
            confirmPassword: Yup.string()
                .required('Confirm Password is required')
                .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
            acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required'),
        });
    }

    const handleSubmit = (data) => {
        console.log(JSON.stringify(data, null, 2));
    }


    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.black, padding: 10, alignItems: 'center'}}>
            <KeyboardAvoidingView>
                <Pressable onPress={()=> navigation.navigate('Register')}>
                    <AntDesign name="arrowleft" size={24} color={COLORS.white} />
                </Pressable>
                <Text style={{textAlign: 'center', justifyContent: 'space-between', color: 'white'}}>
                    РЕГИСТРАЦИЯ
                </Text>

                {/*<View style={{width: 350, marginTop: 45}}>*/}
                {/*    <View>*/}
                {/*        <Text style={s.label}>Имя</Text>*/}
                {/*        /!*<InputAuth value={name}*!/*/}
                {/*        /!*           onChangeText={(text => setName(text))}*!/*/}
                {/*        /!*           placeholderTextColor={'white'}*!/*/}
                {/*        /!*           inputContainerStyle={{borderBottomWidth: 0}}*!/*/}
                {/*        /!*           style={s.input}/>*!/*/}
                {/*    </View>*/}

                {/*    /!*<InputAuth label={'LastName'}/>*!/*/}


                {/*    /!*<InputAuth placeholder={'email'}*!/*/}
                {/*    /!*           value={email}*!/*/}
                {/*    /!*           onChangeText={(text => setEmail(text))}*!/*/}
                {/*    /!*           placeholderTextColor={'white'}*!/*/}
                {/*    /!*           inputContainerStyle={{borderBottomWidth: 0}}*!/*/}
                {/*    /!*           style={s.input}/>*!/*/}

                {/*    /!*<InputAuth placeholder={'phone'}*!/*/}
                {/*    /!*           value={phone}*!/*/}
                {/*    /!*           onChangeText={(text => setPhone(text))}*!/*/}
                {/*    /!*           placeholderTextColor={'white'}*!/*/}
                {/*    /!*           inputContainerStyle={{borderBottomWidth: 0}}*!/*/}
                {/*    /!*           style={s.input}/>*!/*/}

                {/*    /!*<InputAuth placeholder={'password'}*!/*/}
                {/*    /!*           value={password}*!/*/}
                {/*    /!*           onChangeText={(text => setPassword(text))}*!/*/}
                {/*    /!*           secureTextEntry={true}*!/*/}
                {/*    /!*           placeholderTextColor={'white'}*!/*/}
                {/*    /!*           inputContainerStyle={{borderBottomWidth: 0}}*!/*/}
                {/*    /!*           style={s.input}/>*!/*/}
                {/*</View>*/}

                <Pressable style={password.length > 4 ? s.activeBtn : s.diactiveBtn}>
                    <Text style={s.register} onPress={()=> AuthService.register(name,  email, phone,  password)}>
                        Register
                    </Text>
                </Pressable>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default RegisterScreen;


// @ts-ignore
const s = StyleSheet.create({
    label:{
        color: COLORS.white
    },
    input: {
        width: 350,
        padding: 15,
        borderRadius: 5,
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        color: 'white'
    },

    diactiveBtn: {
        width: 300,
        marginLeft: 'auto',
        marginRight: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: COLORS.white,
        borderWidth: 2,
        padding: 14
    },

    activeBtn: {
        width: 300,
        backgroundColor: 'red',
        marginLeft: 'auto',
        marginRight: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'white',
        borderWidth: 2,
        padding: 14
    },

    register: {
        textAlign: 'center',
        fontSize: 19,
        fontWeight: '700',
        color: 'white'
    },
});
