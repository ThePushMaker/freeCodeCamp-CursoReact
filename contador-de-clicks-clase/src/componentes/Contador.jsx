import React from 'react';
import '../hojas-de-estilos/Contador.css'

export class Contador extends React.Component {
  render() {
    return (
      <div className='contador'>
        {this.props.numClics}
      </div>
    );
  }
}

