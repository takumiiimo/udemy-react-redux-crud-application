import React from "react";

// function App() {
//   return (
//     <React.Fragment>
//       <label htmlFor="bar">
//         bar
//       </label>
//       < input type="text" onChange={() => { console.log("takumiiimo") }} />
//     </React.Fragment>
//   )

// }

// 関数コンポーネント
const App = () => {
  return (

    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />

    </div>
  )
}

const Cat = () => {
  return <div>Meow</div>
}

export default App;
