import FormComponent from './components/form-component/form-component';
import Graph from './components/graph-component';
import AnimatedGraph from './components/animatedGraph';
import Popup from './components/PopUp';
import React, { useState } from 'react';

function App() {
  const func = () => {
    console.log(FormComponent.homeData);
  }

  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  return (
    <div>
      <button onClick={openPopup}>Show PopUp</button>
      {showPopup && <Popup />}
      <h1>Learn about the Laffer Curve !!</h1>
      <FormComponent></FormComponent>
      <p> what the fuck </p>
      <button onClick={func}/>
      {/* <Graph /> */}
      <AnimatedGraph />
    </div>
  )
}

export default App;