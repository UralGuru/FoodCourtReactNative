import React from 'react';
import {
    Text,
    View,
    SafeAreaView,
    KeyboardAvoidingView,
    ScrollView,
    Image,
    ImageBackground,
    StyleSheet
} from "react-native";
import {FONTS, COLORS, SIZES} from "../constants/themes";
import {Ionicons, Entypo} from '@expo/vector-icons';
import CardCafe from "../components/card/cardCafe";

const HomeScreen: React.FC = () => {
    const imgURI = 'https://img4.goodfon.ru/original/2048x1365/4/a2/salo-bekon-kartofel-fri-piure-salat.jpg';
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
                    width: SIZES.width - 50,
                    height: 35,
                    backgroundColor: COLORS.gray,
                    marginTop: 10,
                    marginBottom: 10,
                    marginRight: 'auto',
                    marginLeft: 'auto',
                    borderRadius: 5,
                    display: 'flex',
                    flexDirection: 'row'
                }}>
                    <Ionicons name="md-search-outline" size={24} color="black" style={{lineHeight: 35}}/>
                    <Text style={{fontSize: SIZES.h3, justifyContent: 'center', lineHeight: 35}}>

                        Поиск
                    </Text>
                </View>
                <View style={{alignItems: 'center',}}>
                    <ScrollView>
                        <CardCafe nameCafe={'Бургер кинг'} rating={'5.0'} distance={500}/>
                        <CardCafe nameCafe={'Хачипури'} rating={'5.0'} distance={500}/>
                        <CardCafe nameCafe={'Вкусно и Точка'} rating={'5.0'} distance={500}/>
                        <CardCafe nameCafe={'Котэ'} rating={'5.0'} distance={500}/>
                        <CardCafe nameCafe={'Ресторан'} rating={'5.0'} distance={500}/>
                        <CardCafe nameCafe={'Пунш'} rating={'5.0'} distance={500}/>
                        <CardCafe nameCafe={'Ебидаеби'} rating={'5.0'} distance={500}/>
                        <CardCafe nameCafe={'Бургер кинг'} rating={'5.0'} distance={500}/>

                    </ScrollView>
                </View>

            </View>


        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 340,
        height: 140,
    },
    image: {
        flex: 1,
        justifyContent: 'center'
    },
    text: {
        color: 'white',
        fontSize: 32,
        lineHeight: 140,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000c0',
    },
    detailText: {
        position: 'absolute',
        width: '100%',
        bottom: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5
    },
});
