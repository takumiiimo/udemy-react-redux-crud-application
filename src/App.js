import React from "react";
// const greeting = "Hi";
// const dom = <h1 className="foo">{greeting} minako</h1>;

function App() {
  return (
    <React.Fragment>
      <label htmlFor="bar">
        bar
      </label>
      < input type="text" onChange={() => { console.log("takumiiimo") }} />
    </React.Fragment>
  )

}

export default App;
