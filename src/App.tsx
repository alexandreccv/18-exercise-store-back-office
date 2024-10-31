import './styles/App.css';
import { useState } from 'react';
import ListProducts from './components/ListProducts';
import RegisterProduct from './components/RegisterProduct';

function App() {
  const [active, setActive] = useState('');

  return (
    <div className="app">
      <header>
        <button onClick={ () => setActive('register') }>Cadastrar</button>
        <button onClick={ () => setActive('list') }>Ver produtos</button>
      </header>
      {active === 'register' && <RegisterProduct />}
      {active === 'list' && <ListProducts products={ [] } />}

    </div>
  );
}

export default App;
