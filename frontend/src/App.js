import React from 'react';
import './App.css';
import data from './data';

function App() {

  const openMenu = () =>{
    document.querySelector(".sidebar").classList.add("open");
  }

  const closeMenu = () =>{
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
    <div className="grid-container">

      <header className="header">
            <div className="brand">
                <button onClick={openMenu}>
                    &#9776;
                </button>
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
          <ul className="products">
            {
              data.products.map(product =>
                <li>
                  <div className="product">   
                    <img className="product-image" src={product.image} alt="product"/>
                    <div className="product-name">
                      <a href="product.html">{product.name}</a>
                    </div>
                    <div className="product-price">
                      R$ {product.price}
                    </div>
                    <div className="product-score">
                      {product.score}
                    </div>
                  </div>
                </li>
              )
            }
          </ul>
        </div>   
      </main>

      <footer className="footer">
        Todos os direitos reservados.
      </footer>

    </div>
  );
}

export default App;
