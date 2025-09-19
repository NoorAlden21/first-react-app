import { useState } from "react";
export default function RequestTracker() {
  const [requests, setRequests] = useState({ pending: 0, completed: 0 });

  function handleClick() {
    setRequests({ ...requests, pending: requests.pending + 1 });
    setTimeout(() => {
      setRequests((prev) => ({
        pending: prev.pending - 1,
        completed: prev.completed + 1,
      }));
    }, 3000);
  }
  return (
    <div>
      <h2>Pending: {requests.pending}</h2>
      <h2>Completed: {requests.completed}</h2>
      <button onClick={handleClick}>Buy</button>
    </div>
  );
}
