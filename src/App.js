import React from "react";
import PropTypes from "prop-types";

// 関数コンポーネント
const App = () => {
  const profiles = [
    { name: "Takumi", age: 27 },
    { name: "Minako", age: 37 },
    { name: "NoName", age: 99 }
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
  return <div>Hi, I'm {props.name}, and {props.age} years old. </div>
}
User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
