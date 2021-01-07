import React, { useState } from "react";
import Result from "./result";
import "./styles.css";

const App = () => {
  const [img, setImg] = useState();

  const inputEvent = (e) => {
    const data = e.target.value;
    setImg(data);
  };
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search Anything"
        value={img}
        onChange={inputEvent}
      />
      {img === "" ? null : <Result name={img} />}
    </div>
  );
};
export default App;
