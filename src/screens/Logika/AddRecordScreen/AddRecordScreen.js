import {StyleSheet, View, TouchableOpacity,} from 'react-native';
import {Background} from "../../../components/Background/Background";
import Icon from 'react-native-vector-icons/FontAwesome';
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {COLORS} from "../../../assets/colors";

import {InputPicker} from "../../../components/Picker/Picker"
import {Lesson} from "./components/Lesson";
import {Other} from "./components/Other";
import {Replace} from "./components/Replace";

import {SaveButton} from "./common/SaveButton";
import {FinalValue} from "./common/FinalValue";
import {createRecord, saveRecords} from "../../../store/logika/actions";

const AddRecordScreen = ({navigation, route}) => {
    const dispatch = useDispatch()

    const [name, setName] = useState('');
    const [peoples, setPeoples] = useState(10)
    const [rate, setRate] = useState(44)
    const [date, setDate] = useState(new Date());
    const [value, setValue] = useState(rate * peoples)
    const [selectedTypeLesson, setSelectedTypeLesson] = useState("group");
    const [status, setStatus] = useState(false);

    useEffect(() => {
        setValue(rate * peoples)
        setStatus(false)
    }, [rate, peoples])

    const types = [
        {label: 'Група', value: 'group'},
        {label: 'Відпрацювання', value: 'відпрацювання'},
        {label: 'Заміна', value: 'replace'},
        {label: 'МК', value: 'MK'},
    ]

    const saveRecord = () => {
        if(name!=='' && value!==0 && rate!==0 && peoples!==0){
            dispatch(createRecord({
                name: name,
                date: date,
                amountPeoples: peoples,
                rate: rate,
                value: value,
            }))
            dispatch(saveRecords())
            navigation.goBack(null)
        }else {
            setStatus(true)
        }

    }

    const onChangeType = (type) => {
        if (type === 'MK') {
            setValue(100)
            setName('MK')
            setRate(100)
            setPeoples(1)
        } else if (type === 'відпрацювання') {
            setValue(100)
            setName('Відпрацювання')
            setRate(100)
            setPeoples(1)
        } else {
            setValue(440)
            setName('Заміна')
            setRate(44)
            setPeoples(10)
        }
        setSelectedTypeLesson(type)
    }

    return (
        <Background style={s.container}>
            <View>
                <View style={s.header}>

                    <TouchableOpacity onPress={() => navigation.goBack(null)} style={
                        {
                            paddingHorizontal: 7,
                            paddingVertical: 7,
                        }
                    }>
                        <Icon name="arrow-left"
                              size={22}
                              color={"rgba(255,255,255,0.91)"}
                        />
                    </TouchableOpacity>
                    <View style={s.picker}>
                        <InputPicker selectedItem={selectedTypeLesson}
                                     setSelectedItem={onChangeType}
                                     data={types}

                        />
                    </View>
                </View>

                {selectedTypeLesson === 'group' ?
                    <Lesson
                        rate={rate}
                        setRate={setRate}
                        peoples={peoples}
                        setPeoples={setPeoples}
                        selectedGroup={name}
                        setSelectedGroup={setName}
                        date={date}
                        setDate={setDate}
                    /> :
                    selectedTypeLesson === 'replace' ? <Replace
                            rate={rate}
                            setRate={setRate}
                            peoples={peoples}
                            setPeoples={setPeoples}
                            date={date}
                            setDate={setDate}

                        /> :
                        <Other naming={selectedTypeLesson}
                               name={name}
                               setName={setName}
                               date={date}
                               setDate={setDate}/>
                }
            </View>
            <View style={s.finalContainer}>
                <FinalValue value={value} setValue={setValue}/>
                <SaveButton onPressHandler={saveRecord} error={status}/>
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
        height: 100,
        backgroundColor: COLORS.MAIN_COLOR,
        paddingHorizontal: 13,
        paddingTop: 40,

        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    picker: {
        marginRight: 10,
        width: 170,
        height: 50,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 20

    },
    finalContainer: {
        bottom: 20,
    }

})

export {AddRecordScreen}
