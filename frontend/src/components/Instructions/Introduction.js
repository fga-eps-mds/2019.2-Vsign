/*
*
*		@author: Marcos Cabeceira
*		Talk is cheap, show me the code
*/

import React from 'react';

import { Container } from 'rsuite';
import SigningSteps from '../Shared/SigningSteps';
import Navbar from '../RecordPage/Navbar';
import SigningTips from '../SigningTips/SigningTips';

export default function Introduction(props) {
  return (
    <Container>
      <Navbar />
      <SigningSteps history={props.history} />
      <SigningTips />
    </Container>
  )
};
