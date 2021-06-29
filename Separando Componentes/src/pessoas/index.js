import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Pessoa extends Component {
    render() {
        return (
            <View style={styles.areaPessoa}>
                <Text style={styles.textPessoa}> Nome: {this.state.data.nome}</Text>
                <Text style={styles.textPessoa}> Idade: {this.state.data.idade}</Text>
                <Text style={styles.textPessoa}> E-mail: {this.state.data.email}</Text>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    areaPessoa:{
        backgroundColor: '#222', 
        height: 200,
        marginBottom: 15,
    },

    textPessoa:{
        color: '#fff',
        fontSize:20,
    },
})

export default Pessoa;
