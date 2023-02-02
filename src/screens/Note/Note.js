import {StyleSheet, Text, View, Button, TouchableOpacity, TouchableHighlight, TextInput} from 'react-native';
import {Background} from "../../components/Background/Background";
import Icon from 'react-native-vector-icons/FontAwesome';
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateNotes} from "../../store/notes/actions";
import {COLORS} from "../../assets/colors";


const NoteScreen = ({navigation, route}) => {
    const dispatch = useDispatch()
    let {currentNote} = useSelector(state => state.notesReducer)

    const {id, name, text} = currentNote
    const [nameNote, setNameNote] = useState(name)
    const [textNote, setTextNote] = useState(text)

    useEffect(() => {
        dispatch(updateNotes({id, nameNote, textNote}))
    }, [nameNote, textNote])

    return (
        <Background style={s.container}>
            <View style={s.header}>
                <TouchableOpacity onPress={() => navigation.goBack(null)} style={
                    {

                        paddingHorizontal: 7,
                        paddingVertical: 7,
                    }
                }>

                    <Icon name="arrow-left"
                          size={22}
                          color={"rgba(255,255,255,0.75)"}
                    />


                </TouchableOpacity>
                <TextInput style={s.header_input}
                           onChangeText={(e) => setNameNote(e)}
                           value={nameNote}
                           placeholder={"Note Name"}
                           placeholderTextColor={'rgba(255,255,255,0.5)'}/>
            </View>
            <View>
                <TextInput
                    multiline={true}
                    style={s.input}
                    value={textNote}
                    onChangeText={(text) => setTextNote(text)}
                />
            </View>
        </Background>
    );
};


const s = StyleSheet.create({
    header: {
        height: 100,
        backgroundColor: COLORS.MAIN_COLOR,
        paddingHorizontal: 13,
        paddingTop: 40,

        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    header_input: {
        color: COLORS.TEXT_COLOR,
        fontSize: 22,
        marginLeft: 10,
        paddingHorizontal: 10,
        width: '90%',
        height: '100%',
    },
    container: {
        backgroundColor: 'rgba(0,0,0,0.25)',
    },
    input: {
        color: COLORS.TEXT_COLOR,
        height: '100%',
        textAlignVertical: 'top',
        paddingHorizontal: 10,
        paddingVertical: 10,
        fontSize: 17,

    }

})

export {NoteScreen}
