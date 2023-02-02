import {StyleSheet, View,  TextInput} from 'react-native';

import {useEffect} from "react";
import {COLORS} from "../../../../assets/colors";
import {NumberPicker} from "../common/NumberPicker";
import {DatePicker} from "../common/DatePicker";
import {FinalValue} from "../common/FinalValue";

const Replace = ({
                     peoples, setPeoples,
                     rate, setRate,
                     date, setDate,
                     name, setName
                 }) => {


    return (
        <View>
            <View style={s.inputContainer}>
                <TextInput
                    placeholder={'Нотатка'}
                    placeholderTextColor={'rgba(255,255,255,0.8)'}
                    value={name}
                    setName={setName}
                    style={s.input}/>
            </View>

            <NumberPicker value={peoples} setValue={setPeoples} text={'Кількість учнів:'}/>
            <NumberPicker value={rate} setValue={setRate} text={'Ставка:'}/>

            <DatePicker setDate={setDate} date={date} text={'Дата уроку:'}/>

        </View>
    );
};


const s = StyleSheet.create({
    inputContainer: {
        paddingTop: 20,
        alignItems: 'center',
        width: '100%'
    },
    input: {
        backgroundColor: 'rgba(255,255,255,0.13)',
        color: 'white',

        width: '90%',
        height: 45,
        borderRadius: 15,
        paddingLeft: 15,
        fontSize: 24,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },

})

export {Replace}
