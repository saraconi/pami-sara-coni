import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class Contador extends React.Component {
     constructor() {
         super() ;
         this.state = {
             contador: 0,
         
     };
}

Decrementar () {
    this.setState({
        contador: this.state.contador - 1
    });
}

Incremnetar () {
    this.setState({
      contador: this.state.contador + 1
    });
}

render () {
    return (
      <View>
          <View style={styles.texto}>
              <Text>{this.state.contador}</Text>
          </View>
          <View style={StyleSheet.botoes}>
              <Button
                style={styles.botao1}
                title= "Aumenta"
                onPress={this.Incremnetar.bind(this)}
              ></Button>
             <Button
             style={this.botao2}
             onPress= {this.Decrementar.bind(this)}
             title="Diminui"
             >

             </Button>
          </View>
      </View>
    );
}
}

const style = StyleSheet.create({
    botoes: {
        display: 'flex',
        flexDirection: 'row',
        alingSelf: 'center',
        top: 220,
        height: 40,
    },
    texto: {
        alingItems: 'center',
        top: 200,
    }
})

