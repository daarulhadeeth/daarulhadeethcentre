import React from 'react';
import Togglegg from '../components/Togglegg';
import intermediateOneData from '../data/intermediate-one';
import intermediateTwoData from '../data/intermediate-two';
import advanceOneData from '../data/advance-one';
import advanceTwoData from '../data/advance-two';

function Faq() {
  return (
    <>
      <Togglegg data={intermediateOneData} />
      <Togglegg data={intermediateTwoData} />
      <Togglegg data={advanceOneData} />
      <Togglegg data={advanceTwoData} />
    </>
  );
}

export default Faq;
