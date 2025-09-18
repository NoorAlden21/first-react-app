import { useState } from "react";
export default function Scoreboard() {
  const [player, setPlayer] = useState({
    firstName: "Ranjani",
    lastName: "Shettar",
    score: 10,
  });
  return (
    <div>
      <label>
        score: <b>{player.score}</b>
        <button
          onClick={() => {
            setPlayer({ ...player, score: player.score + 1 });
          }}
        >
          +1
        </button>
      </label>
      <br></br>
      <label>
        first name:
        <input
          value={player.firstName}
          onChange={(event) => {
            setPlayer({ ...player, firstName: event.target.value });
          }}
        ></input>
      </label>
      <label>
        last name:
        <input
          value={player.lastName}
          onChange={(event) => {
            setPlayer({ ...player, lastName: event.target.value });
          }}
        ></input>
      </label>
    </div>
  );
}
