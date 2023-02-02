import {NoteScreen, AddRecordScreen} from "../screens/index";
import {HomeNavigation} from "./HomeNavigation"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator, } from '@react-navigation/stack';

const Stack = createStackNavigator();

const forFade = ({ current }) => ({
    cardStyle: {
        opacity: current.progress,
    },
});
const Navigation = () => {

    const stackOptions={

        cardStyleInterpolator: forFade ,
        headerShown: false,
    }

    return (
        <Stack.Navigator screenOptions={stackOptions} >
            <Stack.Screen name="HomeNavigation"
                          component={HomeNavigation}/>
            <Stack.Screen name="NoteScreen"
                          component={NoteScreen}/>
            <Stack.Screen name="AddRecordScreen"
                          component={AddRecordScreen}/>
        </Stack.Navigator>
    )
}

export {Navigation}
