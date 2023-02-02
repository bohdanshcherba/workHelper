import {createNativeStackNavigator} from "@react-navigation/native-stack";

import {MessageGeneratorScreen, MenuScreen, GroupsScreen} from '../../screens/index'
import { createStackNavigator } from '@react-navigation/stack';
import {GroupScreen} from "../../screens/Groups/GroupScreen/GroupScreen";

const Stack = createStackNavigator();
const forFade = ({ current }) => ({
    cardStyle: {
        opacity: current.progress,
    },
});

const MenuStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            cardStyleInterpolator: forFade
        }}>
            <Stack.Screen name="MenuScreen" component={MenuScreen}/>
            <Stack.Screen name="Settings" component={MessageGeneratorScreen}/>
            <Stack.Screen name="Groups" component={GroupsScreen}/>
            <Stack.Screen name="Group" component={GroupScreen}/>
        </Stack.Navigator>
    );
};

export {MenuStack}
