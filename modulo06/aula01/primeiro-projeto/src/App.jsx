import React from 'react';
import logoImg from './assets/images/logo.png';

// Componente em classe é uma classe que herda a classe Component do React,
// e retorna HTML dentro do método render.

class App extends React.Component {

  // Método responsável por renderizar o conteúdo HTML do nosso componente
  render() {
    return (
      <header>
        <nav>
          <div className='nav-brand'>
            <img src={logoImg} alt="" />
            <h1>Space Flight News</h1>
          </div>

          <ul className='nav-list'>
            <li>
              <a href="/">Home</a>
            </li>
            
            <li>
              <a href="/">Trending</a>
            </li>

            <li>
              <a href="/">Categories</a>
            </li>

            <li>
              <a href="/">About us</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default App;