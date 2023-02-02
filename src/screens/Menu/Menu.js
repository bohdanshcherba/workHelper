import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Background} from "../../components/Background/Background";
import Icon from 'react-native-vector-icons/Ionicons';


const MenuScreen = ({navigation, route}) => {
    return <Background style={s.container}>
        <View style={s.innerContainer}>
            <View style={s.line}>
                <TouchableOpacity style={s.item} onPress={()=>navigation.navigate('Groups')}>
                    <Icon name={'school'} size={45} color={"white"}/>
                    <Text style={s.item_text}>My groups</Text>
                </TouchableOpacity>

                {/*<TouchableOpacity  style={s.item}>*/}
                {/*    <Icon name={'stats-chart'} size={45} color={"white"}/>*/}
                {/*    <Text style={s.item_text}>Statistic</Text>*/}
                {/*</TouchableOpacity>*/}
                {/*<TouchableOpacity  style={s.item}>*/}
                {/*    <Icon name={'color-palette'} size={45} color={"white"}/>*/}
                {/*    <Text style={s.item_text}>Theme</Text>*/}
                {/*</TouchableOpacity>*/}
                <TouchableOpacity  style={s.item} onPress={()=>navigation.navigate('Settings')}>
                    <Icon name={'pizza'} size={45} color={"white"}/>
                    <Text style={s.item_text}>Повідомлення</Text>
                </TouchableOpacity>
            </View>

        </View>
    </Background>
};

const s = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    innerContainer: {

    },
    line: {
        flexDirection: 'column',

    },
    item:{
        paddingHorizontal: 20,
        paddingVertical: 20,
        alignItems: "center"

    },
    item_text:{
        color: 'white',
        textAlign:'center',
        overflow: 'hidden'
    }
})
export {MenuScreen}
