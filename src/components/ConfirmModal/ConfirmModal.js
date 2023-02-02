import React, {useState} from "react";
import {View, StyleSheet, TouchableOpacity, Modal, Text, SafeAreaView, Alert} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";

const ConfirmModal = ({visible, setVisible, onConfirm}) => {


    return (
        <>
            <Modal animationType="slide"
                   transparent={true}
                   visible={visible}
                   onRequestClose={() => {
                       Alert.alert("Modal has been closed.");
                       setVisible(!visible);
                   }}
            >
                <SafeAreaView style={{flex: 1}} onTouchEnd={() => setVisible(false)} >
                    <View style={s.centeredView}>
                        <View style={s.modalView}>
                            <View style={s.modalTextContainer}>
                                <Text style={s.modalText}>Are you sure?</Text>
                            </View>

                            <View style={s.innerContainer}>
                                <TouchableOpacity style={s.modalBtn} onPress={() => setVisible(false)}>
                                    <Text style={s.modalBtnText}>Cancel</Text>
                                </TouchableOpacity>
                                <Text style={{color:'rgba(255,255,255,0.59)', fontSize:24}}>|</Text>
                                <TouchableOpacity style={s.modalBtn} onPress={()=>onConfirm()}>
                                    <Text style={s.modalBtnText}>Delete</Text>

                                </TouchableOpacity>

                            </View>


                        </View>
                    </View>
                </SafeAreaView>
            </Modal>
        </>

    );
}

const s = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    modalView: {
        width: '95%',
        backgroundColor: 'rgb(43,43,43)',
        borderRadius: 16,
        shadowColor: "#ffffff",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,

        alignItems: "center"
    },
    modalTextContainer:{
        width: '100%',
        paddingHorizontal: 30,
        marginTop: 20,
        marginBottom: 10,
    },
    modalText:{
        color: 'white',
        fontSize: 16,
    },
    innerContainer:{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 30,
        marginVertical: 15,
    },
    modalBtn: {
        flexDirection:'row',
        paddingHorizontal: 20,
        paddingVertical: 5,
        alignItems: "center",
    },
    modalBtnText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
    }
});

export {ConfirmModal}
