import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {DateTimePickerAndroid} from "@react-native-community/datetimepicker";

const DatePicker = ({text, date, setDate}) => {

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setDate(currentDate);
    };
    const pickDate = () => {
        DateTimePickerAndroid.open({
            value: date,
            onChange,
            mode: 'date',
            is24Hour: true,
            themeVariant: 'dark'
        });
    }

    return (
        <TouchableOpacity onPress={pickDate} style={s.container}>
            <Text style={s.placeholder}>{text}</Text>
            <Text style={s.input}>{date.toLocaleDateString()}</Text>
        </TouchableOpacity>
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

export {DatePicker}
