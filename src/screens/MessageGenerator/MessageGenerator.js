import {StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Clipboard, ScrollView} from 'react-native';
import {Background} from "../../components/Background/Background";
import {DatePicker} from "../Logika/AddRecordScreen/common/DatePicker";
import {useState} from "react";
import Icon from "react-native-vector-icons/Ionicons";
import {SaveButton} from "../Logika/AddRecordScreen/common/SaveButton";
import {msgTemplate} from "./assets/msgTemplate";

const MessageGeneratorScreen = ({navigation, route}) => {
    const [date, setDate] = useState(new Date())
    const [value, setValue] = useState('')
    const [thema, setThema] = useState('')
    const [learn, setLearn] = useState('')
    const [recall, setRecall] = useState('')
    const [home, setHome] = useState('')
    const [picked, setPicked] = useState([])

    const addChild = () => {
        if (value !== '') {
            setPicked([...picked, value])
            setValue('')
        }
    }

    const deleteChild = (e) => {
        setPicked(picked.filter(el => el !== e))
    }

    const generate = () => {
        let finalMsg = msgTemplate(date, picked, thema, recall, learn, home)
        Clipboard.setString(finalMsg)
        navigation.goBack(null)
    }

    return <Background>
        <View>
            <ScrollView >
            <DatePicker date={date} setDate={setDate} text={'Дата уроку:'}/>

                <View style={s.inputContainer}>
                    <TextInput
                        onSubmitEditing={addChild}
                        placeholder={'Відсутній учень'}
                        placeholderTextColor={'rgba(255,255,255,0.8)'}
                        value={value}
                        onChangeText={e => setValue(e)}
                        style={s.input}/>
                    <TouchableOpacity style={s.addBtn} onPress={addChild}>
                        <Icon name={'add'} color={'#fff'} size={35}/>
                    </TouchableOpacity>
                </View>
                <View style={s.childs}>
                    {picked.map(el => {
                        return <View key={el} style={s.child}>
                            <Text style={s.child_text}>{el}</Text>
                            <TouchableOpacity onPress={() => deleteChild(el)}>
                                <Icon name={'close-circle'} color={'#fff'} size={25}/>
                            </TouchableOpacity>
                        </View>

                    })}
                </View>
                <View style={s.inputContainer}>
                    <TextInput
                        placeholder={'Тема'}
                        placeholderTextColor={'rgba(255,255,255,0.8)'}
                        value={thema}
                        onChangeText={setThema}
                        style={s.inputOther}/>

                </View>
                <View style={s.container}>
                    <Text style={{color: 'white', fontSize: 20}}>
                        Ми пригадали,
                    </Text>
                    <TextInput
                        placeholder={'шось'}
                        placeholderTextColor={'rgba(255,255,255,0.8)'}
                        value={recall}
                        onChangeText={setRecall}
                        style={s.inputOther}/>

                </View>
                <View style={s.container}>
                    <Text style={{color: 'white', fontSize: 20}}>
                        Ми вивчили,
                    </Text>
                    <TextInput
                        placeholder={'шось'}
                        placeholderTextColor={'rgba(255,255,255,0.8)'}
                        value={learn}
                        onChangeText={setLearn}
                        style={s.inputOther}/>

                </View>
                <View style={s.inputContainer}>
                    <TextInput
                        placeholder={'Домашня практика'}
                        placeholderTextColor={'rgba(255,255,255,0.8)'}
                        value={home}
                        onChangeText={setHome}
                        style={s.inputOther}/>

                </View>
                <View style={{marginTop: 20}}>
                    <SaveButton text={'Generate'} onPressHandler={generate}/>
                </View>
            </ScrollView>
        </View>
    </Background>;
};

const s = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        paddingTop: 20,
        paddingBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    }, container: {
        marginLeft: 20,
    }, input: {
        backgroundColor: 'rgba(255,255,255,0.13)',
        color: 'white',
        width: '75%',
        height: 45,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        paddingLeft: 15,
        fontSize: 24,
        paddingHorizontal: 10,
        paddingVertical: 5,
    }, inputOther: {
        backgroundColor: 'rgba(255,255,255,0.13)', color: 'white', width: '90%', height: 45, borderRadius: 15,

        paddingLeft: 15, fontSize: 24, paddingHorizontal: 10, paddingVertical: 5,
    }, addBtn: {
        height: 45,
        paddingHorizontal: 10,
        backgroundColor: 'rgba(255,255,255,0.13)',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
    }, childs: {
        marginHorizontal: 10, flexDirection: 'row', flexWrap: 'wrap', width: '100%',
    }, child: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 7,
        paddingVertical: 5,
        borderWidth: 1,
        borderRadius: 15,
        marginHorizontal: 5,
        marginVertical: 5,

        backgroundColor: '#a40101'
    }, child_text: {
        color: '#fff', fontSize: 20, marginRight: 5,
    },

})
export {MessageGeneratorScreen}
