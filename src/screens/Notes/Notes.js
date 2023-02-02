import {
    StyleSheet,
    Alert,
    Modal,
    Text,
    View,
    Button,
    TouchableOpacity,
    TouchableHighlight,
    ScrollView,
    Vibration
} from 'react-native';
import {Background} from "../../components/Background/Background";
// import {StatusBar} from 'expo-status-bar';
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getNoteById, loadNotes, saveNotes, createNote, deleteNote} from "../../store/notes/actions";
import {s} from './styles.js'
import {ConfirmModal} from "../../components/ConfirmModal/ConfirmModal";

const NotesScreen = ({navigation, route}) => {
    let {notes} = useSelector(state => state.notesReducer)
    const dispatch = useDispatch()
    const [modalVisible, setModalVisible] = useState(false);
    const [deleteId, setDeleteId] = useState('');

    useEffect(() => {
        dispatch(loadNotes())
    }, [])

    useEffect(() => {
        dispatch(saveNotes())
    }, [notes])

    const openNoteHandler = (id) => {
        dispatch(getNoteById(id))
        navigation.navigate("NoteScreen")
    }

    const addNoteHandler = () => {
        navigation.navigate("NoteScreen")
        dispatch(createNote())
    }

    const showModalDelete = (id) => {
        Vibration.vibrate(50)
        setDeleteId(id)
        setModalVisible(true)
    }

    const deleteNoteHandler = () => {
        dispatch(deleteNote(deleteId))
        setModalVisible(false)
    }

    return (
        <Background style={s.container}>
            <ConfirmModal visible={modalVisible} setVisible={setModalVisible} onConfirm={deleteNoteHandler}/>

            <View style={s.header}>
                <Text style={s.header_text}>My Notes</Text>
            </View>

            <ScrollView style={s.listNotes}>
                {notes.map((item) => {
                    return <TouchableOpacity
                        key={item.id}
                        onPress={() => openNoteHandler(item.id)}
                        onLongPress={() => showModalDelete(item.id)}
                        style={s.note}>
                        <Text style={s.noteName}>
                            {item.name}
                        </Text>
                        <Text style={s.noteText}>
                            {item.text}
                        </Text>
                    </TouchableOpacity>
                })}
            </ScrollView>

            <TouchableOpacity style={s.add} onPress={addNoteHandler}>
                <Text style={s.add_text}>+</Text>
            </TouchableOpacity>

            {/*<StatusBar style="light"/>*/}

        </Background>
    );
};


export {NotesScreen}
