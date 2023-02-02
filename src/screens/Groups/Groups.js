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
import {
    createGroup,
    deleteAllRecords,
    deleteRecord,
    getGroupById,
    loadGroups,
    loadRecord
} from "../../store/logika/actions";
import Icon from "react-native-vector-icons/Ionicons";
import {PopupMenu} from "../../components/PopupMenu/PopupMenu";
import {ConfirmModal} from "../../components/ConfirmModal/ConfirmModal";

const GroupsScreen = ({navigation, route}) => {
    let {groups} = useSelector(state => state.logikaReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadGroups())
    }, [])

    const openGroup = (id) => {
        dispatch(getGroupById(id))
        navigation.navigate('Group')
    }

    const options = [
        {
            title: 'Додати групу',
            nameIco: 'add',
            action: () => {
                dispatch(createGroup())
                navigation.navigate('Group')
            },
        },
    ]


    return <Background style={s.container}>
        <View style={s.header}>
            <Text style={s.header_text}>My Groups</Text>
            <PopupMenu options={options}/>
        </View>
        <View style={s.history}>
            <Text style={s.historyText}>Groups:</Text>
            <TouchableOpacity style={s.changeOrder}>
                <Icon name={'arrow-down'} color={'white'} size={24} style={s.changeOrderItemL}/>
                <Icon name={'arrow-up'} color={'white'} size={24} style={s.changeOrderItemR}/>
            </TouchableOpacity>
        </View>
        <ScrollView style={s.listRecords}>
            {groups.length !== 0 ? groups.map((item) => {
                return <TouchableOpacity
                    onPress={()=>{openGroup(item.id)}}
                    key={item.id}
                    style={s.record}>
                    <View>
                        <Text style={s.groupName}>
                            {item.name}
                        </Text>
                        <Text style={s.lessonDate}>
                            {item.day} | {item.time}
                        </Text>
                    </View>
                    <View style={s.profitContainer}>
                        <Text style={s.profit}>
                            {item.amountPeoples} учнів
                        </Text>
                    </View>
                </TouchableOpacity>
            }) : null}
        </ScrollView>

    </Background>

};


export {GroupsScreen}
