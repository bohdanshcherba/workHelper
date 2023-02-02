import {StyleSheet, Text, TouchableOpacity, View, Dimensions} from 'react-native';
import {COLORS} from "../../../../assets/colors";

const windowHeight = Dimensions.get('window').height;
const SaveButton = ({onPressHandler, text='Save', error}) => {

    return (
        <View style={s.container}>
            <TouchableOpacity
                disabled={error}
                style={[s.btn, error? {borderColor:'red', borderWidth: 2}:null]}
                              onPress={() => onPressHandler()}>
                <Text style={s.btnText}>{text}</Text>
            </TouchableOpacity>
        </View>
    );
};


const s = StyleSheet.create({
    container: {
        // position: 'absolute',
        width: '100%',
        alignItems: 'center',
        bottom: 5,
        // top: windowHeight  - 70,
    },
    btn: {
        backgroundColor: COLORS.MAIN_COLOR,
        borderWidth: 1,
        borderColor: COLORS.SECOND_COLOR,
        width: 150,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',

    },
    btnText: {
        color: COLORS.TEXT_COLOR,
        fontWeight: 'bold',
        fontSize: 22,
        textAlign: 'center'
    },
})

export {SaveButton}
