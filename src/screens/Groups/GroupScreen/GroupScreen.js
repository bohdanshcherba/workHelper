import {StyleSheet, View, TouchableOpacity, TextInput, Text,} from 'react-native';
import {Background} from "../../../components/Background/Background";
import Icon from 'react-native-vector-icons/FontAwesome';
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {COLORS} from "../../../assets/colors";
import {NumberPicker} from "../../Logika/AddRecordScreen/common/NumberPicker";
import {InputPicker} from "../../../components/Picker/Picker";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {deleteGroup, saveGroups, updateGroup} from "../../../store/logika/actions";
import {ConfirmModal} from "../../../components/ConfirmModal/ConfirmModal";

const GroupScreen = ({navigation, route}) => {
    const dispatch = useDispatch()
    let {currentGroup} = useSelector(state => state.logikaReducer)

    const [name, setName] = useState(currentGroup.name);
    const [peoples, setPeoples] = useState(currentGroup.amountPeoples)
    const [rate, setRate] = useState(currentGroup.rate)
    const [day, setDay] = useState(currentGroup.day);
    const [time, setTime] = useState(currentGroup.time);
    const [visibleModal, setVisibleModal] = useState(false);

    const types = [
        {label: 'Понеділок', value: 'Понеділок'},
        {label: 'Вівторок', value: 'Вівторок'},
        {label: 'Середа', value: 'Середа'},
        {label: 'Четвер', value: 'Четвер'},
        {label: "П\'ятниця", value: 'П\'ятниця'},
        {label: 'Субота', value: 'Субота'},
        {label: 'Неділя', value: 'Неділя'},
    ]
    const saveGroup = () => {
        dispatch(updateGroup({
            id: currentGroup.id,
            name: name,
            amountPeoples: peoples,
            day: day,
            time: time,
            rate: rate,
        }))
        dispatch(saveGroups())
        navigation.goBack(null)
    }

    const deleteGroupHandler = () => {
        setVisibleModal(false)
        dispatch(deleteGroup(currentGroup.id))
        dispatch(saveGroups())
        navigation.goBack(null)
    }

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const handleConfirm = (date) => {
        let minutes = date.getMinutes().toLocaleString()==='0'?'00':date.getMinutes().toLocaleString()
        setTime(date.getHours().toLocaleString()+':' + minutes  )
        setDatePickerVisibility(false)
    };

    return (
        <Background style={s.container}>
            <ConfirmModal onConfirm={deleteGroupHandler} setVisible={setVisibleModal} visible={visibleModal}/>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="time"
                onConfirm={handleConfirm}
                onCancel={()=>setDatePickerVisibility(false)}
                locale="en_GB"
            />
            <View>
                <View style={s.header}>
                    <TouchableOpacity onPress={() => navigation.goBack(null)} style={
                        {paddingHorizontal: 7,
                            paddingVertical: 7,}}>
                        <Icon name="arrow-left" size={22} color={"rgba(255,255,255,0.91)"}/>
                    </TouchableOpacity>
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity style={{marginRight: 10}} onPress={saveGroup}>
                            <Icon name="save" size={22} color={"rgb(255,255,255)"}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginLeft: 10}} onPress={()=>setVisibleModal(true)}>
                            <Icon name="trash" size={22} color={"white"}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <View style={s.inputContainer}>
                        <TextInput
                            placeholder={'Назва групи*'}
                            placeholderTextColor={'rgba(255,255,255,0.8)'}
                            value={name}
                            onChangeText={e => setName(e)}
                            style={s.input}/>
                    </View>
                    <NumberPicker value={peoples} setValue={setPeoples} text={'Кількість учнів:'}/>
                    <NumberPicker value={rate} setValue={setRate} text={'Ставка:'}/>
                    <View style={s.datetimeContainer}>
                        <View style={s.picker}>
                            <InputPicker selectedItem={day}
                                         setSelectedItem={(type)=>setDay(type)}
                                         data={types}
                            />
                        </View>
                        <TouchableOpacity onPress={()=>setDatePickerVisibility(true)}>
                            <Text style={{color:'white', marginRight:35, fontSize: 22, fontWeight:'bold' }}>
                                {time}</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>


        </Background>
    );
};


const s = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between'
    },
    header: {
        height: 70,
        backgroundColor: COLORS.MAIN_COLOR,
        paddingHorizontal: 15,

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    inputContainer: {
        paddingTop: 20,
        paddingBottom: 20,
        alignItems: 'center',
        width: '100%'
    },
    input: {
        backgroundColor: 'rgba(255,255,255,0.13)',
        color: 'white',
        width: '90%',
        height: 45,
        borderRadius: 15,
        paddingLeft: 15,
        fontSize: 24,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    datetimeContainer:{
        flexDirection:"row",
        alignItems: 'center',
        justifyContent:'space-between',
        marginHorizontal: 5,
    },
    picker: {
        marginRight: 10,
        width: 170,
        height: 50,
        justifyContent: 'center',


    },
})

export {GroupScreen}
