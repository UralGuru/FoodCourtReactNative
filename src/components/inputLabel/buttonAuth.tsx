import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

interface Props {
    onPress: any,
    title: string,
}
export const Button: React.FC<Props & any>=({onPress, title, styleBtn, styleText, iconName, ...props}) => {
    return (
        <Pressable style={[styles.button, styleBtn]} onPress={onPress}>
            {iconName && <AntDesign name={iconName} size={24} color="black" style={{marginRight: 5}}/>}
            <Text style={[styles.text, styleText]}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 20,
        elevation: 3,
        backgroundColor: 'black',
        display: 'flex',
        flexDirection: 'row',

    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});
