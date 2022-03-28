import React from 'react';
import styled from 'styled-components';
import MintForm from './MintForm';

function MintSection() {
  return (
    <div className='mint-section container'>
      <div className='row'>
        <div className='col-lg-6'></div>
        <MintForm /> 
      </div>
    </div>
  )
}

export default MintSection