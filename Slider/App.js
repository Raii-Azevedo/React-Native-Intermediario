import React, { Component } from 'react';
import { View, Text, Stylesheet } from 'react-native';

import {Slider} from '@react-native-community/slider';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valor:0,

        };
    }
    render(){
        return(
            <View style={styles.container}>
                <Slider minimumValue={0} 
                maximumValue={100} 
                onValueChange={(valorSelecinado) => this.setState({valor:valorSelecinado})}
                value={this.state.valor}
                minimumTrackTintColor="#757"
                maximumTrackTintColor="#ff0000"/>

                <Text>Você tem {this.state.valor.toFixed(1)} kg</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;
