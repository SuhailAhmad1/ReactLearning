import { useState } from "react";

export default function Player({ name, symbol, isActive }) {
  const [isEidting, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  function handleChangeInput(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {!isEidting && <span className="player-name">{playerName}</span>}
        {isEidting && (
          <input
            required
            value={playerName}
            onChange={handleChangeInput}
          ></input>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{!isEidting ? "Edit" : "Save"}</button>
    </li>
  );
}
