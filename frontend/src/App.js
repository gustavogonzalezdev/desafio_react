import React from 'react';
import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';

function App() {

  const openMenu = () =>{
    document.querySelector(".sidebar").classList.add("open");
  }

  const closeMenu = () =>{
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
    <BrowserRouter>

      <div className="grid-container">

        <header className="header">
              <div className="brand">
                  <button onClick={openMenu}>
                      &#9776;
                  </button>
                  <Link to="/">GusGames</Link>
                  <a href="index.html">GusGames</a>
              </div>
              <div className="header-links">
                  <a href="cart.html">Carrinho</a>
                  <a href="login.html">Login ou Cadastre-se</a>
              </div>
        </header>

        <aside className="sidebar">
          <h3>Categorías dos jogos</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>
            x
          </button>
          <ul>
            <li>
              <a href="index.html">Ação</a>
            </li>
            <li>
              <a href="index.html">Aventura</a>
            </li>
            <li>
              <a href="index.html">Esporte</a>
            </li>
          </ul>
        </aside>
          
        <main className="main">
          <div className="content">
            <Route path="/products/:id" component={ProductScreen}/>
            <Route path="/" exact={true} component={HomeScreen}/>
            
          </div>   
        </main>

        <footer className="footer">
          Todos os direitos reservados.
        </footer>

      </div>

    </BrowserRouter>
  );
}

export default App;
