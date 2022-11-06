import React, {useState} from 'react';
import {Text, View, SafeAreaView, KeyboardAvoidingView, Pressable, TextInput, StyleSheet, Modal} from "react-native";
import {Input} from '@rneui/base';
import {Button} from "../../components/inputLabel/buttonAuth";
import {useNavigation} from "@react-navigation/native";
import {Formik, Field, Form, ErrorMessage, FormikProps} from "formik";
import * as Yup from "yup";
import {COLORS, SIZES} from "../../constants/themes";
import {ICONS} from "../../constants/icons";
import {Ionicons} from '@expo/vector-icons';
import {AntDesign} from '@expo/vector-icons';
import CustomInput from "../../components/inputLabel/inputAuth";


const LoginScreen: React.FC<{}> = () => {
    const [passView, SetPassView] = useState(true);
    const navigation = useNavigation();

    const validationSchema = () => {
        return Yup.object().shape({
            email: Yup.string()
                .required('Обязательное поле')
                .email('Некорректный ввод почты'),
            password: Yup.string()
                .required('Обязательное поле')
                .min(4, 'Пароль должен содеражть не менее 4 символовы')
                .max(40, 'Пароль не должен превышать 40 символов'),
        });
    };

    const handleLogin = (formValue: Values) => {
        console.log(formValue)
    }

    const initialValues = {
        email: "",
        password: "",
    };

    interface Values {
        email: string;
        password: string;
    }


    // @ts-ignore
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.black}}>
            <KeyboardAvoidingView>
                {/*<Pressable onPress={() => navigation.navigate('Register')}>*/}
                {/*    <AntDesign name="arrowleft" size={24} color={COLORS.white}/>*/}
                {/*</Pressable>*/}
                <Text style={{textAlign: 'center', justifyContent: 'space-between', color: 'white', marginTop: 15}}>
                    ВХОД
                </Text>


                <View style={styles.loginContainer}>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={handleLogin}
                        validationSchema={validationSchema()}
                    >
                        {({
                              handleChange,
                              handleBlur,
                              handleSubmit,
                              values,
                              errors,
                              touched,
                              resetForm
                          }) => (
                            <>
                                <View style={styles.labelInput}>
                                    <Text style={styles.textLabel}>Логин</Text>
                                    <TextInput
                                        name="email"
                                        style={styles.textInput}
                                        onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        value={values.email}
                                        keyboardType="email-address"
                                    />
                                    {(errors.email && touched.email) &&
                                        <View>
                                            <Text style={{fontSize: 10, color: COLORS.red1}}>{errors.email}</Text>
                                        </View>
                                    }
                                </View>

                                <View style={styles.labelInput}>
                                    <Text style={styles.textLabel}>Пароль</Text>
                                    <View style={{display: 'flex', flexDirection: 'row'}}>
                                        <TextInput
                                            name="password"
                                            style={[styles.textInput, {width: SIZES.width - 80}]}
                                            onChangeText={handleChange('password')}
                                            onBlur={handleBlur('password')}
                                            value={values.password}
                                            secureTextEntry={passView}
                                        />

                                        <Pressable onPress={() => SetPassView(!passView)}
                                                   style={{borderBottomWidth: 1, borderBottomColor: '#494949'}}>
                                            {passView ? <Ionicons name="md-eye-off-outline" size={24} color="white"/> :
                                                <Ionicons name="md-eye-outline" size={24} color="white"/>}
                                        </Pressable>

                                    </View>
                                    {(errors.password && touched.password) &&
                                        <View>
                                            <Text style={{fontSize: 10, color: COLORS.red1}}>{errors.password}</Text>
                                        </View>
                                    }
                                </View>


                                <Button onPress={handleSubmit} title="Войти"
                                        styleBtn={(errors.email || errors.password) ? {
                                            backgroundColor: COLORS.red2,
                                            width: SIZES.width - 50,
                                            marginTop: 60,
                                            height: 50
                                        } : {
                                            backgroundColor: COLORS.red1,
                                            width: SIZES.width - 50,
                                            marginTop: 60,
                                            height: 50
                                        }}/>
                            </>
                        )}
                    </Formik>

                    <View>
                        <View style={styles.line}/>
                        <Text style={styles.text}>Или войдите с помощью</Text>
                    </View>
                    <Button onPress={() => console.log('Log in with Google')}
                            styleBtn={{backgroundColor: '#FAFAFA', width: SIZES.width - 50, height: 50}}
                            styleText={{color: 'black'}}
                            iconName={ICONS.google}
                            title="Google"/>

                    <Pressable onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.text}>
                            Все еще нет аккаунта? Создайте его <Text style={{textDecorationLine: 'underline'}}>здесь</Text>
                        </Text>
                    </Pressable>
                </View>
                <View style={styles.circle1}/>
                <View style={styles.circle2}/>

            </KeyboardAvoidingView>

        </SafeAreaView>
    );
};

export default LoginScreen;


// @ts-ignore
const styles = StyleSheet.create({
    loginContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: SIZES.height - 100,
    },
    labelInput: {
        display: 'flex',
        alignItems: 'center',
        width: SIZES.width,
        marginTop: 10,
        marginBottom: 20,

    },
    textLabel: {
        color: 'white',
        marginBottom: 10,
        fontWeight: '700',
        width: SIZES.width - 50
    },
    text: {
        textAlign: 'center',
        color: 'white',
        fontSize: 15,
        // fontWeight: '400',
        marginTop: 20,
        marginBottom: 20,
        paddingHorizontal: 5,
        // backgroundColor: 'black'
    },
    textInput: {
        width: SIZES.width - 50,
        borderBottomWidth: 1,
        borderBottomColor: '#494949',
        color: 'white',
        fontWeight: '400'
    },
    line: {
        alignSelf: 'center',
        position: 'absolute',
        // borderBottomColor: 'white',
        // borderBottomWidth: 1,
        height: '50%',
        width: '87%'
    },
    circle1: {
        width: 400,
        height: 400,
        position: 'absolute',
        top: SIZES.height-400,
        left: SIZES.width-230,
        backgroundColor: 'rgba(157, 157, 157, 0.04)',
        borderRadius: 1000,
        zIndex: -1,
    },
    circle2: {
        width: 400,
        height: 400,
        position: 'absolute',
        top: SIZES.height-300,
        left: -150,
        backgroundColor: 'rgba(157, 157, 157, 0.03)',
        borderRadius: 1000,
        zIndex: -1,
    }
})
