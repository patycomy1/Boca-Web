import './App.css';
import logobocaweb from './logobocaweb.png';
import {Component} from 'react';
import Busca from './Components/Busca';
import Lista from './Components/Lista';
import Rodape from './Components/Rodape';
import Cabecalho from './Components/Cabecalho';

 
class App extends Component{
  
  state = {
    busca: '',
    odas: []
  }

  componentDidMount(){
    this.carregaODAs();
  }

  carregaODAs(){
    const {busca} = this.state;
    fetch('https://www.bocaweb.com.br/apibocaweb?nome='+busca)
    .then(response => response.json())
    .then(odas => this.setState({odas}))
  }

  buscaODAs = (evento) => {
    this.setState({busca: evento.target.value});
    this.carregaODAs();
  }

  render(){
    return(
      <section className='container'>
        <Cabecalho
          logobocaweb = {logobocaweb}
        />
        <Busca
          busca={this.state.busca}
          buscaODA={this.buscaODAs} 
        />

        <Lista
          odas = {this.state.odas}
        />

        <Rodape
       
        />
      </section>
    )
  }

}

export default App;
