import './App.css'
import { ListaDestinos } from './components/ListaDestinos';
import { PrecioTotal } from './components/PrecioTotal';
import { EncontrarDestino } from './components/EncontrarDestino';
import { VerificarPrecios } from './components/VerificarPrecios';
import { LoguearDestinos } from './components/LoguearDestinos';
import { ListaDestinosEconomicos } from './components/ListaDestinosEconomicos';

function App() {
  return (
    <div>
      <h1>Ejemplos de Funciones de Arrays en React</h1>
      <ListaDestinos />
      <PrecioTotal />
      <EncontrarDestino />
      <VerificarPrecios />
      <LoguearDestinos />
      <ListaDestinosEconomicos />
    </div>
  );
}

export default App;