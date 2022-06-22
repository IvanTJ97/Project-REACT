import React from 'react';
import PropTypes from 'prop-types';
import {Tablero} from './Linea.styles';

const Linea=({P="",S="",T="",C="",Q=""})=>{ 

  return <Tablero>
    <div>{P}</div>
    <div>{S}</div>
    <div>{T}</div>
    <div>{C}</div>
    <div>{Q}</div>
  </Tablero>
};
export default Linea;
