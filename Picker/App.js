import React, { Component } from 'react';
import { View, Text, Stylesheet } from 'react-native';

import {Picker} from '@react-native-picker/picker';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pizza: 0,
            pizzas: [
                {key: 1, nome: "Strogonoff", valor: 35.90},
                {key: 2, nome: "Calabresa", valor: 38.90},
                {key: 3, nome: "Margherita", valor: 37.90},
                {key: 4, nome: "Brigadeiro", valor: 32.90},
                {key: 5, nome: "Portuguesa", valor: 39.90},
            ]
        };
    };

    render(){

        let pizzasItem = this.state.pizza.map( (v, k)=>{
            return <Picker.Item key={k} label={v.nome}/>
        })

        return(
            <View style={styles.container}>
                <Text style={styles.logo}>Menu de Pizza</Text>
                <Picker selectedValue={this.state.pizza} onValueChange={(itemValue, itemIndex) => this.setState({pizza: itemValue})}> 
                   {pizzasItem}
                </Picker>

                
                <Text style={styles.pizzas}>Você escolheu: {this.state.pizzas[this.state.pizza].nome}</Text>
                <Text style={styles.pizzas}>R$ {this.state.pizzas[this.state.pizza].valor.toFixed(2)}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20, 
    },

    logo:{
        textAlign: 'center', 
        FontSize: 25, 
        fontWeight: 'bold',
    },

    pizzas:{
        marginTop: 15, 
        FontSize: 28, 
        textAlign: 'center',
    },
});

export default App;
