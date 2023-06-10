import FormComponent from './components/form-component/form-component';
import Graph from './components/graph-component';
import AnimatedGraph from './components/animatedGraph';

function App() {
  const func = () => {
    console.log(FormComponent.homeData);
  }
  return (
    <div>

      <FormComponent></FormComponent>
      <p> what the fuck </p>
      <button onClick={func}/>
      {/* <Graph /> */}
      <AnimatedGraph />
    </div>
  )
}

export default App;