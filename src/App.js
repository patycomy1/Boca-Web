import './App.css';
import logobocaweb from './logobocaweb.png';
import {Component} from 'react';
import Busca from './Components/Busca';
import Lista from './Components/Lista';
import Rodape from './Components/Rodape';
import Cabecalho from './Components/Cabecalho';

function App () {
 const {busca, setBusca} = useState('');
 const {odas, setOdas} = useState ([]);
 
 useEffect(() => {
  carregaODAs();
 }, [])
 
 const carregaOdas = () => {
  fetch ('https://www.bocaweb.com.br/apibocaweb?nome='+busca)
    .then(response => response.json())
    .then(odas => setOdas(odas));
  }
   
 const buscaODA = (evento) => {
   setBusca(evento.target.value);
    carregaODAs();
  }
 
 return (
  <section className = "container">
  <Cabecalho/>
  <Busca
  busca={busca}
buscaODA={buscaODA}
/>
 <div className = "lista">
  <p> {odas.lenght} odas </p>
{odas.map(oda => (
 <div key ={oda._id}>
          <Lista
          id={oda._id}
nome={oda.nome}
usuario={oda.usuario}
descricao={oda.descricao}
/>
 </div>
))}
</div>
</section>
)
}
export default App;
 
 
 
 
 
// class App extends Component{
  
//   state = {
//     busca: '',
//     odas: []
//   }

//   componentDidMount(){
//     this.carregaODAs();
//   }

//   carregaODAs(){
//     const {busca} = this.state;
//     fetch('https://www.bocaweb.com.br/apibocaweb?nome='+busca)
//     .then(response => response.json())
//     .then(odas => this.setState({odas}))
//   }

//   buscaODAs = (evento) => {
//     this.setState({busca: evento.target.value});
//     this.carregaODAs();
//   }

//   render(){
//     return(
//       <section className='container'>
//         <Cabecalho
//           logobocaweb = {logobocaweb}
//         />
//         <Busca
//           busca={this.state.busca}
//           buscaODA={this.buscaODAs} 
//         />

//         <Lista
//           odas = {this.state.odas}
//         />

//         <Rodape
       
//         />
//       </section>
//     )
//   }

// }

// export default App;
