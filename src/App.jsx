import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Pokemon from './containers/Pokemon';
import PokemonList from './containers/PokemonList'
import './assets/css/app.css'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path={'/'} exact component={PokemonList} />
        <Route path={'/pokemon/:pokemon'} exact component={Pokemon} />
        <Redirect to={'/'} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
