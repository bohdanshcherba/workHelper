import {s} from "./styles";
import {Background} from "../../components/Background/Background";
import {
    Alert,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Vibration
} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {deleteAllRecords, deleteRecord, loadRecord} from "../../store/logika/actions";
import Icon from "react-native-vector-icons/Ionicons";
import {PopupMenu} from "../../components/PopupMenu/PopupMenu";
import {ConfirmModal} from "../../components/ConfirmModal/ConfirmModal";

const LogikaScreen = ({navigation, route}) => {
    let {monthValue, records} = useSelector(state => state.logikaReducer)
    const dispatch = useDispatch()
    const [modalVisible, setModalVisible] = useState(false);

    records = records.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
    })

    useEffect(() => {
        dispatch(loadRecord())
    }, [])

    const dateToString = (date) => {
        let dater = new Date(date)

        return dater.toLocaleDateString()
    }

    const longPressHandler = (id) => {
        Vibration.vibrate(50)
        dispatch(deleteRecord(id))
    }

    const options = [
        {
            title: 'Очистити історію',
            nameIco: 'reload',
            action: () => {
                setModalVisible(true)
            },
        },
        {
            title: 'Експорт даних',
            nameIco: 'download',
            action: () => {
            },
        },
        {
            title: 'Мої групи',
            nameIco: 'exit',
            action: () => {
                navigation.navigate('Groups')
            },
        },
    ]


    return <Background style={s.container}>
        <ConfirmModal visible={modalVisible} setVisible={setModalVisible} onConfirm={()=>dispatch(deleteAllRecords())}/>
        <View style={s.header}>
            <Text style={s.header_text}>Logika salary</Text>
            <PopupMenu options={options}/>
        </View>
        <View style={s.counter}>
            <Text style={s.counterText}>Total: {monthValue.toString()}₴</Text>
        </View>
        <View style={s.history}>
            <Text style={s.historyText}>History:</Text>
            <TouchableOpacity style={s.changeOrder}>
                <Icon name={'arrow-down'} color={'white'} size={24} style={s.changeOrderItemL}/>
                <Icon name={'arrow-up'} color={'white'} size={24} style={s.changeOrderItemR}/>
            </TouchableOpacity>
        </View>
        <ScrollView style={s.listRecords}>
            {records.length !== 0 ? records.map((item) => {
                return <TouchableOpacity
                    key={item.id}
                    style={s.record}
                    onLongPress={() => longPressHandler(item.id)}>
                    <View>
                        <Text style={s.groupName}>
                            {item.name}
                        </Text>
                        <Text style={s.lessonDate}>
                            {dateToString(item.date)} | {item.amountPeoples} уч
                        </Text>
                    </View>
                    <View style={s.profitContainer}>
                        <Text style={s.profit}>
                            {item.value}₴
                        </Text>
                    </View>
                </TouchableOpacity>
            }) : null}
        </ScrollView>
        <TouchableOpacity style={s.add} onPress={() => navigation.navigate('AddRecordScreen')}>
            <Text style={s.add_text}>Add record</Text>
        </TouchableOpacity>
    </Background>

};


export {LogikaScreen}
