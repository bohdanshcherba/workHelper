import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {
    NotesScreen, HomeScreen, ScheduleScreen, LogikaScreen
} from "../screens/index";

import Icon from 'react-native-vector-icons/Ionicons';
import {MenuStack} from "../components/MenuStack/MenyStack";
import {StyleSheet} from "react-native";

import {COLORS} from "../assets/colors";
const Tab = createBottomTabNavigator()

const screenOptionStyle =({ route }) =>({

    tabBarShowLabel: false,
    headerShown: false,
    tabBarActiveTintColor: '',
    tabBarStyle: {
        backgroundColor: COLORS.MAIN_COLOR,
        borderTopWidth: 1,
        borderTopColor: COLORS.SECOND_COLOR
    },
    tabBarVisible: true,
    tabBarIcon: ({ focused, color, size }) => {
        let iconName

        if (route.name === 'Logika'){
            iconName = focused?'school':'school-outline'
        }
        if (route.name === 'Notes'){
            iconName = focused?'document-text':'document-text-outline'
        }

        if (route.name === 'Schedule'){
            iconName = 'calendar'
        }
        if (route.name === 'Menu'){
            iconName = 'apps'
        }

        return <Icon name={iconName} color={focused?'#ff6200':'#fff'} size={30} />
    }
})

const HomeNavigation = () => {
    return (
        <Tab.Navigator screenOptions={screenOptionStyle} initialRouteName="Home">
            <Tab.Screen name="Logika" component={LogikaScreen}/>
            <Tab.Screen name="Notes" component={NotesScreen}/>
            <Tab.Screen name="Schedule" component={ScheduleScreen}/>
            <Tab.Screen name="Menu" component={MenuStack} />
        </Tab.Navigator>
    )
}
const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#ffffff',
        shadowOpacity: 0.5,
        shadowRadius: 5,

        shadowOffset: {
            width: 0,            // These can't both be 0
            height: 1,           // i.e. the shadow has to be offset in some way
        }
    }
})

export {HomeNavigation}
