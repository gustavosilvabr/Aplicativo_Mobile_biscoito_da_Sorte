import { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View,Image,TouchableOpacity} from 'react-native';

export  default class App extends Component{
constructor(props){
  super(props),
  this.state={
      textoFrase:this.quebrarBiscoito,
      img:require('./biscoito.png'),
  };
  this.quebrarBiscoito = this.quebrarBiscoito.bind(this);
  this.frases=[
"A sorte está ao seu lado hoje!",
"Pronto para desvendar os mistérios da fortuna?",
"Que os ventos da sorte soprem a seu favor!",
"Prepare-se para grandes surpresas!",
"Explore sua sorte e desvende novos caminhos!",
  ];
}
quebrarBiscoito(){
  let numeroAleatorio = Math.floor(Math.random() * this.frases.length);

  this.setState({
    textoFrase:this.frases[numeroAleatorio],
    img:require('./biscoitoAberto.png'),
  })
}
   render(){
       return (
        <View style={styles.container}>
            <Image style={styles.img}source={this.state.img} />
            <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>
            <TouchableOpacity style={styles.botao}onPress={this.quebrarBiscoito}>
              <View style={styles.btnArea}>
                <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
              </View>
            </TouchableOpacity>
        </View>
      );
   }
    }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
  },
  img:{
    width:250,
    height:250,
  },
  textoFrase:{
    fontSize:20,
    color:"#dd7b22",
    fontStyle:'italic',
    textAlign:'center',
    margin:30,
  },
  botao:{
    width:230,
    height:50,
    borderWidth:2,
    borderColor:"#dd7b22",
    borderRadius:25,
  },
  btnArea:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  btnTexto:{
    fontSize:18,
    fontWeight:'bold',
    color:"#dd7b22"
  
  }
})