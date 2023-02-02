import {StyleSheet, Text, View, Button, TextInput, Platform, KeyboardAvoidingView,Keyboard, TouchableWithoutFeedback} from 'react-native';
import {CalendarWidget} from "../../components/Widgets";
import {Background} from "../../components/Background/Background";


const ScheduleScreen = ({navigation}) => {
    return (
        <Background style={styles.widgets} >
            <CalendarWidget/>
        </Background>

    );
};


const styles = StyleSheet.create({
    widgets: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 150,
        width:'100%',

    },

    background: {
        height: '100%'
    }
});

export {ScheduleScreen}
