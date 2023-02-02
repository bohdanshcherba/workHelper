import {StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const NumberPicker = ({text, value, setValue}) => {

    return (
        <View style={s.container}>
            <Text style={s.placeholder}>{text}</Text>
            <View style={s.innerContainer}>
                <TouchableOpacity style={{paddingRight: 10}}
                                  onPress={() => {
                                      setValue(value - 1)
                                  }}>
                    <Icon name="caret-back" size={24} color="white"/>
                </TouchableOpacity>
                <TextInput keyboardType='numeric'
                           value={value.toString()}
                           style={s.input}
                           onChangeText={e => setValue(e === '' ? '' : parseInt(e))}/>
                <TouchableOpacity style={{paddingLeft: 10}}
                                  onPress={() => {
                                      setValue(value + 1)
                                  }}>
                    <Icon name="caret-forward" size={24} color="white"/>
                </TouchableOpacity>
            </View>
        </View>
    );
};


const s = StyleSheet.create({
    container: {

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 5,
        paddingVertical: 5,
    },
    innerContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    placeholder: {
        fontSize: 18,
        color: 'white',
    },
    input: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25,
    }
})

export {NumberPicker}
