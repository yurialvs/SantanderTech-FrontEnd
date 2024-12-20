import React from 'react';

// Componente em classe é uma classe que herda a classe Component do React,
// e retorna HTML dentro do método render.

class App extends React.Component {
  constructor() {
    super();  // Chama o construtor da classe pai (React.Component)
    this.nome = 'Yuri Alves Lopes';  // Define o valor da propriedade 'nome'
  }

  // Método responsável por renderizar o conteúdo HTML do nosso componente
  render() {
    return (
      <div>
        <h1>Aprendendo ReactJS</h1>

        <h2>{this.nome}</h2>

        <p>Isso aqui é um parágrafo.</p>
      </div>
    );
  }
}

export default App;