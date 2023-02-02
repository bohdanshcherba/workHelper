import {StyleSheet, Text, View, Button} from 'react-native';
import {Background} from '../../components/Background/Background'
import {CalendarWidget} from "../../components/Widgets";

const HomeScreen = ({props}) => {

    return (

        <Background style={styles.widgets} >
            <Text>Empty</Text>
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


export {HomeScreen}
