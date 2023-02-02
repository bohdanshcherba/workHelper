import {StyleSheet, View} from 'react-native';
import {LinearGradient} from 'react-native-linear-gradient';
import {Component} from "react";


class Background extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View>
                {/*<LinearGradient*/}
                {/*    start={{x: 0, y: 0}}*/}
                {/*    end={{x: 0.5, y: 0.9}}*/}
                {/*    colors={['#000000','#000000' ]}*/}
                {/*    style={styles.background}*/}

                {/*>*/}
                <View style={styles.background}>
                    <View style={this.props.style}>
                        {this.props.children.length > 1 ?
                        this.props.children.map(el => el) : this.props.children
                    }
                    </View>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        height: '100%',
        backgroundColor: 'black'
    }
});


export {Background}
