import React, { Component } from 'react';
import { View, Text, Stylesheet, Switch } from 'react-native';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: false,
        };
    }
    render(){
        return(
            <View style={styles.container}>
                <Switch
                value = {this.state.status}
                onValueChange={(valorSwitch) => this.setState({status: valorSwitch})}
                thumbColor="#f000f0"
                />
                <Text style={styles.textSwitch}>{(this.state.status) ? "Ativo" : "Inativo"}</Text>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    textSwitch:{
        fontSize: 26,
        textAlign: "center",
    },
});

export default App;
