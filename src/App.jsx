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
    </>
  )
}

export default App
