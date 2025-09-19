import { useState } from "react";
export default function Devices() {
  const [input, setInput] = useState("");
  const [devices, setDevices] = useState([
    { id: 1, name: "apple" },
    { id: 2, name: "mac" },
    { id: 3, name: "android" },
    { id: 4, name: "lenovo" },
  ]);
  const devicesList = devices.map((device) => {
    return (
      <li key={device.id}>
        {device.name}{" "}
        <button
          onClick={() => {
            editDeviceHandler(device.id);
          }}
        >
          edit
        </button>
        <button
          onClick={() => {
            deleteDeviceHandler(device.id);
          }}
        >
          delete
        </button>
      </li>
    );
  });

  function addDeviceHandler() {
    setDevices([...devices, { id: devices.length + 1, name: input }]);
  }

  function editDeviceHandler(id) {
    const newDevices = devices.map((device) => {
      if (device.id === id) {
        return { ...device, name: device.name + "w" };
      } else {
        return device;
      }
    });
    setDevices(newDevices);
  }
  function deleteDeviceHandler(id) {
    const newDevices = devices.filter((device) => {
      return device.id !== id;
    });
    setDevices(newDevices);
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
