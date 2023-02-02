import {ScrollView, StyleSheet, View,} from 'react-native';
import Select from '@redmin_delishaj/react-native-select';
import {NumberPicker} from "../common/NumberPicker";
import {DatePicker} from "../common/DatePicker";
import {useSelector} from "react-redux";

const Lesson = ({
                    selectedGroup,
                    setSelectedGroup,
                    rate,
                    setRate,
                    peoples,
                    setPeoples,
                    date,
                    setDate
                }) => {

    let {groups} = useSelector(state => state.logikaReducer)

    const groupsList = groups.map(group => {
        return {text: group.name, value: group.name}
    })

    const configDropDown = {
        fontSize: 18,
        backgroundColor: '#404040',
        textColor: 'white',
        selectedBackgroundColor: 'white',
        selectedTextColor: 'black',
        selectedFontWeight: 'bold',
    }

    const onSelectHandler = (value) => {
        let group = groups.filter(el => el.name === value)[0]
        if (group) {
            setRate(group.rate)
            setPeoples(group.amountPeoples)
        }

        setSelectedGroup(value)
    }

    return (
        <View>
            <View style={s.selectContainer}>
                <Select
                    config={configDropDown}
                    data={groupsList}
                    onSelect={onSelectHandler}
                    value={selectedGroup}
                />
            </View>
            <View>
                <NumberPicker value={peoples} setValue={setPeoples} text={'Кількість учнів:'}/>
                <NumberPicker value={rate} setValue={setRate} text={'Ставка:'}/>

                <DatePicker text={'Дата уроку:'} date={date} setDate={setDate}/>
            </View>


        </View>
    );
};


const s = StyleSheet.create({
    selectContainer: {
        paddingTop: 20,
        alignItems: 'center',
        width: '100%',
        zIndex: 1000,
    }
})

export {Lesson}
