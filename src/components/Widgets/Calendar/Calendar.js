import {StyleSheet, Text, View, Button} from 'react-native';
import {LocaleConfig} from 'react-native-calendars';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const CalendarWidget = () => {
    return <Calendar
        style={{
            borderWidth: 1,
            borderRadius: 15,
            borderColor: '#ffffff',
            height: 350,
            width: 340,

        }}
        theme={{
        backgroundColor: 'transparent',
        calendarBackground: 'transparent',
        textSectionTitleColor: '#ffffff',
        selectedDayBackgroundColor: '#380036',
        selectedDayTextColor: '#ffffff',
        todayTextColor: '#ffffff',
        dayTextColor: '#ffffff',

        DayBackgroundColor: '#ffffff',


        selectedDotColor: '#ffffff',
        arrowColor: '#ffffff',
        disabledArrowColor: '#d9e1e8',
        monthTextColor: '#fff',
        indicatorColor: '#fff',

        textDayFontWeight: '300',
        textMonthFontWeight: 'bold',
        textDayHeaderFontWeight: '300',
        textDayFontSize: 16,
        textMonthFontSize: 16,
        textDayHeaderFontSize: 16
    }}/>;
};

const style = StyleSheet.create({
    calendar: {
        backgroundColor: 'rgba(241,0,0,0)',
    },

});

export {CalendarWidget}
