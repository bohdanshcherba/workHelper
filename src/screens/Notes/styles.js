import {StyleSheet} from "react-native";
import {COLORS} from "../../assets/colors";

const s = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: 100,
        backgroundColor: COLORS.MAIN_COLOR,

        paddingTop: 50,

        borderWidth: 1,
        borderTopWidth: 0,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    header_text: {
        textAlign: "center",
        color: COLORS.TEXT_COLOR,
        fontSize: 22
    },
    listNotes: {
        paddingHorizontal: 15,
    },
    note: {
        backgroundColor: 'rgb(43,43,43)',
        marginVertical: 7,
        height: 120,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: COLORS.SECOND_COLOR
    },
    noteName: {
        paddingHorizontal: 20,
        paddingTop: 10,
        fontSize: 18,
        color: COLORS.TEXT_COLOR,
        fontWeight: 'bold'
    },
    noteText: {
        paddingHorizontal: 20,
        paddingTop: 2,
        color: COLORS.TEXT_COLOR,
        height: 70,
    },
    add: {
        position: 'absolute',
        backgroundColor: COLORS.MAIN_COLOR,
        borderWidth: 1,
        borderColor: COLORS.SECOND_COLOR,
        width: 60,
        height: 60,
        borderRadius: 50,
        flex: 1,
        justifyContent: 'center',


        bottom: 20,
        right: 20,
    },
    add_text: {
        color: COLORS.TEXT_COLOR,
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center'
    },

})

export {s}
