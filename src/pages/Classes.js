import React from 'react';
import Togglegg from '../components/Togglegg';
import intermediateOneData from '../data/intermediate-one';
import intermediateTwoData from '../data/intermediate-two';
import advanceOneData from '../data/advance-one';
import advanceTwoData from '../data/advance-two';

function Faq() {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-4 text-center">أهلا</h2>
      <Togglegg data={intermediateOneData} />
      <Togglegg data={intermediateTwoData} />
      <Togglegg data={advanceOneData} />
      <Togglegg data={advanceTwoData} />
    </>
  );
}

export default Faq;
