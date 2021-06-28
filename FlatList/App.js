import React, { Component } from 'react';
import { View, Text, Stylesheet, FlatList, InteractionManager } from 'react-native';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feed: [
                { id: '1', nome: "Paula", idade: 22, email: 'paulad@gmail.com'},
                { id: '2', nome: "João", idade: 50, email: 'joanes@gmail.com'},
                { id: '3', nome: "Lídia", idade: 35, email: 'lili@gmail.com'},
                { id: '4', nome: "Otto", idade: 20, email: 'Ottomano@gmail.com'}
            ]
        };
    }

    render(){
        return(
            <View style={styles.container}>
                <FlatList 
                data = {this.state.feed}
                keyExtractor = {({item}) => item.id }
                renderItem = { ({item}) => <Pessoa data={InteractionManager}/>} 
                />
                
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
});

export default App;

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

/* Flatlist possui duas propriedades obrigatórias 
Data e RenderItem
Data = Lista que irá receber
Render Item = Responsável por redenrizar essa lista na tela */
