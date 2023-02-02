import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import {Picker} from '@react-native-picker/picker';
const InputPicker = ({selectedItem, setSelectedItem, data }) => {

    return (

            <Picker
                dropdownIconColor={'white'}
                themeVariant={'dark'}
                selectedValue={selectedItem}
                style={{
                    height: '100%',
                    width: '100%',
                    color: 'white',
                }}
                onValueChange={(itemValue, itemIndex) => setSelectedItem(itemValue)}
            >
                {data.map((item)=>{
                    return <Picker.Item label={item.label} value={item.value} key={item.value} />
                })}

            </Picker>

    );
}

const styles = StyleSheet.create({
    container: {


    }
});

export {InputPicker}