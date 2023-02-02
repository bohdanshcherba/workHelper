import {StyleSheet, Text, View, TextInput} from 'react-native';

const FinalValue = ({value, setValue}) => {

    return (
        <View style={s.container}>
            <Text style={s.text}>Розрахунок: </Text>
            <TextInput keyboardType='numeric'
                       value={value.toString()}
                       style={s.inputFinalValue}
                       onChangeText={e => setValue(e === '' ? 0 : parseInt(e))}
            />
        </View>
    );
};


const s = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 5,

        borderTopWidth: 1,
        borderColor: 'white',
        backgroundColor: 'black',

    },
    text: {
        fontSize: 18,
        color: 'white',
    },

    inputFinalValue: {

        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
    },

})

export {FinalValue}
