import React, { useState, useCallback, useEffect } from "react";
import ReactDOM from "react-dom";

function randomNumber() {
  return Math.ceil(Math.random() * 60);
}

function App() {
  const [number, setNumber] = useState(null);
  const handleClick = useCallback(() => {
    setNumber(randomNumber());
  }, [setNumber]);
  useEffect(() => {
    document.title = number ? "O numero sorteado foi " + number + "!"
    : "Sortear um número!";
  });
  return (
    <>
    {number && <p>O número sorteado foi {number}! </p>}
    <button onClick={handleClick}>Sortear</button>
    </>
  );
}


ReactDOM.render(<App />, document.getElementById("root"));
