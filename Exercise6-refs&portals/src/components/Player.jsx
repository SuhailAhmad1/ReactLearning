import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();

  const [enteredPlayer, setPlayer] = useState(null);

  function handleClick() {
    setPlayer(playerName.current.value);
    playerName.current.value = ""
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayer ?? "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
