import {ImageBackground, StyleSheet, Text, View} from "react-native";
import {Entypo} from "@expo/vector-icons";
import React from "react";

type propsCardCafe = {
    nameCafe: string,
    distance: number,
    rating: string
}

const CardCafe = ({nameCafe, distance, rating}: propsCardCafe) => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={{uri: ('https://img4.goodfon.ru/original/2048x1365/4/a2/salo-bekon-kartofel-fri-piure-salat.jpg')}}
                resizeMode="cover"
                style={styles.image}
                imageStyle={{borderRadius: 20}}>
                    <Text style={styles.text}>
                        {nameCafe}
                    </Text>
                    <View style={styles.detailText}>
                        <Text style={{color: 'white'}}>{distance} м от вас</Text>
                        <Text style={{color: 'white'}}>
                            <Entypo name="star" size={15} color="white"/> {rating}</Text>
                    </View>
</ImageBackground>
</View>
)
};

export default CardCafe;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 340,
        height: 140,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 15
    },
    text: {
        color: 'white',
        fontSize: 32,
        textTransform: 'uppercase',
        lineHeight: 140,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
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
