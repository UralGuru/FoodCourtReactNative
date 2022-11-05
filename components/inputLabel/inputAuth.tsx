// import React, {useState} from 'react';
// import {StyleSheet, Text, TextInput, View} from "react-native";
// import {Input} from "@rneui/base";
// import {COLORS} from "../../constants/themes";
//
// interface Label {
//     label: string;
//     name: string;
//     placeholder: string;
//     password: Boolean;
// }
//
// const InputAuth: React.FC<Label & any> = ({
//                                                   name,
//                                                   label,
//                                                   password,
//                                               handleChange,
//                                               handleBlur,
//
//                                                   ...props
//                                               }) => {
//
//     return (
//         <View>
//             {label && <Text style={s.label}>{label}</Text>}
//             <InputAuth
//                 name="password"
//                 placeholder="Password"
//                 style={{
//                     width: 350,
//                     padding: 15,
//                     borderRadius: 5,
//                     borderBottomWidth: 1,
//                     borderBottomColor: 'white',
//                     color: 'white'
//                 }}
//                 onChangeText={handleChange('password')}
//                 onBlur={handleBlur('password')}
//                 value={values.password}
//                 secureTextEntry={true}
//             />
//         </View>
//     );
// };
//
// export default InputAuth;
//
// // @ts-ignore
// const s = StyleSheet.create({
//     label: {
//         color: COLORS.white
//     },
//     input: {
//         width: 350,
//         padding: 15,
//         borderRadius: 5,
//         borderBottomWidth: 1,
//         borderBottomColor: 'white',
//         color: 'white'
//     },
// });
//
//
