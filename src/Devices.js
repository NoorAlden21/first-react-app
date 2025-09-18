import { useState } from "react";
export default function Devices() {
  const [input, setInput] = useState("");
  const [devices, setDevices] = useState(["apple", "mac", "android", "lenovo"]);
  const devicesList = devices.map((device) => {
    return <li>{device}</li>;
  });

  function addDeviceHandler() {
    setDevices([...devices, input]);
  }
  return (
    <div>
      <ul>{devicesList}</ul>
      <br></br>
      <label>
        Add new device:
        <input
          value={input}
          onChange={(event) => {
            setInput(event.target.value);
          }}
        ></input>
      </label>
      <button onClick={addDeviceHandler}>Add</button>
    </div>
  );
}
