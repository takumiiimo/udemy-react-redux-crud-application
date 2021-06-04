import React from "react";

// 関数コンポーネント
const App = () => {
  const profiles = [
    { name: "Takumi", age: "27" },
    { name: "Minako", age: "37" },
    { name: "Noname" }
  ]
  return (

    <div>
      {
        profiles.map((profiles, index) => {
          return (
            <User name={profiles.name} age={profiles.age} key={index} />
          )
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>Hi, I'm {props.name}, and {props.age}years old. </div>
}

User.defaultProps = {
  age: 27
}

export default App;
