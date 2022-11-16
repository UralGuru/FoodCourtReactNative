import React, {useState} from 'react';
import {
    Text,
    View,
    SafeAreaView,
    KeyboardAvoidingView,
    Pressable,
    TextInput,
    StyleSheet,
    Modal,
    ScrollView
} from "react-native";
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
import TextInputMask from 'react-native-text-input-mask';
import AuthService from "../../api/auth.service"
import {registerType} from "../../constants/types";


const RegisterScreen: React.FC<{}> = () => {
    const [passView, SetPassView] = useState(true);
    const navigation = useNavigation();

    const validationSchema = () => {
        return Yup.object().shape({
            name: Yup.string()
                .required('Обязательное поле'),
            phone: Yup.string()
                .required('Обязательное поле'),
            email: Yup.string()
                .required('Обязательное поле')
                .email('Некорректный ввод почты'),
            password: Yup.string()
                .required('Обязательное поле')
                .min(4, 'Пароль должен содеражть не менее 4 символовы')
                .max(40, 'Пароль не должен превышать 40 символов'),
        });
    };

    const handleLogin = (formValue: registerType) => {
        // console.log(formValue);
        AuthService.register(formValue);
        // navigation.navigate('Home');
    }

    const initialValues = {
        name: "",
        phone: "",
        email: "",
        password: "",
    };


    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.black}}>
            <KeyboardAvoidingView>
                <Pressable onPress={() => navigation.navigate('Login')}
                           style={{
                               display: 'flex',
                               justifyContent: 'center',
                               height: 60,
                               alignItems: 'center',
                           }}>
                    <AntDesign name="arrowleft" size={25} color={COLORS.white} style={{width: SIZES.width - 50}}/>
                </Pressable>
                <Text style={{
                    position: 'absolute',
                    textAlign: 'center',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    left: 0,
                    right: 0,
                    color: 'white',
                    marginTop: 15,
                    height: 50,
                    zIndex: -1
                }}>
                    РЕГИСТРАЦИЯ
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
                                    <Text style={styles.textLabel}>Имя</Text>
                                    <TextInput
                                        style={styles.textInput}
                                        onChangeText={handleChange('name')}
                                        onBlur={handleBlur('name')}
                                        value={values.name}
                                    />
                                    {(errors.name && touched.name) &&
                                        <View>
                                            <Text style={{fontSize: 10, color: COLORS.red1}}>{errors.name}</Text>
                                        </View>
                                    }
                                </View>

                                <View style={styles.labelInput}>
                                    <Text style={styles.textLabel}>Телефон</Text>
                                    <TextInput
                                        style={styles.textInput}
                                        onChangeText={handleChange('phone')}
                                        onBlur={handleBlur('phone')}
                                        value={values.phone}
                                    />
                                    {(errors.phone && touched.phone) &&
                                        <View>
                                            <Text style={{fontSize: 10, color: COLORS.red1}}>{errors.phone}</Text>
                                        </View>
                                    }
                                </View>

                                <View style={styles.labelInput}>
                                    <Text style={styles.textLabel}>Почта</Text>
                                    <TextInput
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
                                        styleBtn={(errors.email || errors.password || errors.name || errors.phone) ? {
                                            backgroundColor: COLORS.red2,
                                            width: SIZES.width - 50,
                                            marginTop: 10,
                                            height: 50
                                        } : {
                                            backgroundColor: COLORS.red1,
                                            width: SIZES.width - 50,
                                            marginTop: 10,
                                            height: 50
                                        }}/>
                            </>
                        )}
                    </Formik>

                    <View>
                        <View style={styles.line}/>
                        <Text style={styles.text}>или зарегистрируйтесь с помощью</Text>
                    </View>
                    <Button onPress={() => console.log('Log in with Google')}
                            styleBtn={{backgroundColor: '#FAFAFA', width: SIZES.width - 50, height: 50}}
                            styleText={{color: 'black'}}
                            iconName={ICONS.google}
                            title="Google"/>

                </View>
                <View style={styles.circle1}/>
                <View style={styles.circle2}/>

            </KeyboardAvoidingView>

        </SafeAreaView>
    );
};

export default RegisterScreen;


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
        top: SIZES.height - 400,
        left: SIZES.width - 230,
        backgroundColor: 'rgba(157, 157, 157, 0.04)',
        borderRadius: 1000,
        zIndex: -1,
    },
    circle2: {
        width: 400,
        height: 400,
        position: 'absolute',
        top: SIZES.height - 300,
        left: -150,
        backgroundColor: 'rgba(157, 157, 157, 0.03)',
        borderRadius: 1000,
        zIndex: -1,
    }
})
