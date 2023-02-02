import {StyleSheet, View, TextInput,} from 'react-native';
import {COLORS} from "../../../../assets/colors";
import {DatePicker} from "../common/DatePicker";
import {FinalValue} from "../common/FinalValue";

const Other = ({
                   naming,
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
                    onChangeText={e => setName(e)}
                    style={s.input}/>
            </View>

            <DatePicker date={date} setDate={setDate} text={`Дата ${naming}:`}/>

        </View>
    );
};


const s = StyleSheet.create({
    inputContainer: {
        paddingTop: 20,
        paddingBottom: 20,
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

export {Other}
