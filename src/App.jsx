
// pages
import {Issues, IssuesCreate, IssuesEdit } from './pages/Issues';
import StatelessComponents from './pages/StatelessComponents';
import StatefulComponents from './pages/StatefulComponents';
import Props from './pages/Props';
import ButtonState from './components/ButtonState';
import Alert from './components/Alert';
import Form from './components/Form';
import ComposeComponent from './pages/ComposeComponent';

// function component react
function App() {
  // expression js
  const sum = 2 + 2;

  function plug(a, b) {
    return a + b;
  }

  // render component with function
  function renderButton() {
    return (
      <button>Click me</button>
    )
  }

  // render component with element variable
  const renderButton2 = (
    <button>Click me</button>
  )

  // JSX
  return (
    <>
      <h1>React JSX</h1>
      <div> 
        Sum: {sum} <br/>
        Function: {plug(10, 20)} <br />
        Render Function: {renderButton} <br />
        Render Function with Elemenrt Variable: {renderButton2}
      </div>
      <h4>Element must be closed</h4>
      <input />
      <br />
      <div />

      <h1>Stateful Components</h1>
      <Issues />

      <h1>StatelessComponents</h1>
      <StatelessComponents />

      <h1>StatefulComponents</h1>
      <StatefulComponents />

      <h1>Props</h1>

      <h4>Alert</h4>
      <Props 
        title="Props Alert" // string
        number={10} // number
        isAuth={true} // boolean
        todos={["todo 1", "todo 2"]} // array
        user={{
          name: "John",
          age: 20,
        }} // object
        onClick={() => {}} // function
        renderButton={renderButton()} // react component by function
        renderComponentFromOutside={<ButtonState />} // react component by render
        renderComponentByDirect={ButtonState} // react component by direct
      >
        Alert test
        <Alert />
      </Props>
      
      <hr />
      <h4>Form</h4>
      <Props 
        title="Props Form" // string
        number={10} // number
        isAuth={true} // boolean
        todos={["todo 1", "todo 2"]} // array
        user={{
          name: "John",
          age: 20,
        }} // object
        onClick={() => {}} // function
        renderButton={renderButton()} // react component by function
        renderComponentFromOutside={<ButtonState />} // react component by render
        renderComponentByDirect={ButtonState} // react component by direct
      >
        Form test
        <Form />
      </Props>


      <h1>ComposeComponent</h1>
      <ComposeComponent />
    </>
  )
}

export default App
