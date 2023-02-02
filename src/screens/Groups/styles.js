import {StyleSheet} from "react-native";
import {COLORS} from "../../assets/colors";

const s = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    header: {
        height: 70,
        width:'100%',
        backgroundColor: COLORS.MAIN_COLOR,

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        borderColor: 'white',
        borderBottomWidth: 1,

    },
    header_text: {
        textAlign: "center",
        color: COLORS.TEXT_COLOR,
        fontSize: 22,
        marginLeft: 20,
    },

    counter: {
        marginVertical: 10,
    },
    counterText: {
        fontSize: 28,
        color: COLORS.TEXT_COLOR,
        fontWeight: 'bold'
    },
    history: {
        marginVertical: 5,
        width: '100%',
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    changeOrder:{
      flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center'
    },
    changeOrderItemL:{
        position: 'absolute',
        right:17,
    },
    changeOrderItemR:{
        position: 'absolute',
        right:6
    },
    historyText: {
        fontSize: 21,
        color: COLORS.TEXT_COLOR,
        fontWeight: 'bold'
    },
    listRecords: {
        width:'100%',
        height: '100%',
        paddingHorizontal: 15,
    },
    record: {
        marginVertical:5,
        flex: 1,
        flexDirection: 'row'
    },
    groupName: {
        width: 280,
        fontSize: 18,
        color: COLORS.TEXT_COLOR,
        fontWeight: 'bold'
    },
    lessonDate: {
        paddingTop: 2,
        color: COLORS.TEXT_COLOR,
        height: 30,
    },
    profitContainer:{

        flex: 1,
        alignItems: 'flex-end',

        justifyContent: 'center',
    },
    profit:{
        fontSize: 20,
        color: COLORS.TEXT_COLOR,
        fontWeight: 'bold'
    },
    add: {

        backgroundColor: COLORS.MAIN_COLOR,
        borderWidth: 1,
        borderColor: COLORS.SECOND_COLOR,
        width: 180,
        height: 50,
        borderRadius: 25,

        justifyContent: 'center',
        bottom: 15

    },
    add_text: {
        color: COLORS.TEXT_COLOR,
        fontWeight: 'bold',
        fontSize: 22,
        textAlign: 'center'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,

    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,

        alignItems: "center"
    },
    modalBtn: {
        backgroundColor: "#2279ec",
        borderRadius: 20,
        padding: 10,
        paddingHorizontal: 50,
        alignItems: "center",
        marginTop: 20,
        marginBottom: 10,
    },

    modalBtnText: {
        color: 'white',
        textAlign: 'center'
    }
})

export {s}
