import React from 'react';
import {Text, View, SafeAreaView, KeyboardAvoidingView, ScrollView} from "react-native";
import {FONTS, COLORS, SIZES} from "../constants/themes";
import { Ionicons } from '@expo/vector-icons';

const LoginScreen: React.FC = () => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'black', padding: 10,}}>
            <View style={{display: 'flex', margin: 15}}>
                <View style={{
                    height: 50,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                    <View>
                        <Text style={{color: 'white', ...FONTS.h2}}>Няшина Кристина</Text>
                        <Text style={{color: 'white', ...FONTS.h4}}>Доброе утро</Text>
                    </View>
                    <View style={{
                        width: 50,
                        height: 50,
                        borderWidth: 1,
                        borderColor: 'white',
                        borderRadius: 50,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Text style={{color: 'white'}}>KN</Text>
                    </View>
                </View>
                <View style={{
                    width: SIZES.width-50,
                    height: 35,
                    backgroundColor: COLORS.gray,
                    marginTop: 10,
                    marginBottom: 10,
                    marginRight: 'auto',
                    marginLeft: 'auto',
                    borderRadius: 5,
                    display:'flex',
                    flexDirection: 'row'
                }}>
                    <Ionicons name="md-search-outline" size={24} color="black" style={{lineHeight: 35}}/>
                    <Text style={{fontSize: SIZES.h3, justifyContent: 'center', lineHeight:35}}>

                        Поиск
                    </Text>
                </View>
                <View style={{alignItems: 'center',}}>
                    <ScrollView>
                        <View style={{width: 330, height: 150, borderWidth: 1, borderColor: 'red'}}></View>
                        <View style={{width: 330, height: 150, borderWidth: 1, borderColor: 'red'}}></View>
                        <View style={{width: 330, height: 150, borderWidth: 1, borderColor: 'red'}}></View>
                        <View style={{width: 330, height: 150, borderWidth: 1, borderColor: 'red'}}></View>
                        <View style={{width: 330, height: 150, borderWidth: 1, borderColor: 'red'}}></View>
                        <View style={{width: 330, height: 150, borderWidth: 1, borderColor: 'red'}}></View>
                        <View style={{width: 330, height: 150, borderWidth: 1, borderColor: 'red'}}></View>
                        <View style={{width: 330, height: 150, borderWidth: 1, borderColor: 'red'}}></View>
                    </ScrollView>
                </View>

            </View>


        </SafeAreaView>
    );
};

export default LoginScreen;
