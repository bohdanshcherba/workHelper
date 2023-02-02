import React, {useState} from "react";
import {View, StyleSheet, TouchableOpacity, Modal, Text, SafeAreaView} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";

const PopupMenu = ({options}) => {
    const [visible, setVisible] = useState(false)


    return (
        <>
            <TouchableOpacity style={s.header_dots} onPress={() => setVisible(true)}>
                <Icon name={'ellipsis-vertical'} color={'white'} size={24}/>
            </TouchableOpacity>
            <Modal transparent visible={visible}>
                <SafeAreaView style={{flex: 1}} onTouchEnd={() => setVisible(false)} >
                    <View style={s.popup}>
                        {options.map((el, i) => {
                            return <TouchableOpacity
                                onPress={el.action}
                                key={el.title}
                                style={[s.option, {borderBottomWidth: i === options.length - 1 ? 0 : 1}]}>
                                <Text style={s.option_text}>{el.title}</Text>
                                <Icon name={el.nameIco} color={'white'} size={25} style={{marginLeft: 20}}/>
                            </TouchableOpacity>
                        })}
                    </View>
                </SafeAreaView>
            </Modal>
        </>

    );
}

const s = StyleSheet.create({
    header_dots: {
        marginRight: 10,
    },
    popup: {
        position: "absolute",
        top: 50,
        right: 20,
        backgroundColor: '#000000',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 12,
    },
    option: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 8,

        borderColor: '#fff'
    },
    option_text: {
        color: 'white',
        fontSize: 16,
    }
});

export {PopupMenu}
