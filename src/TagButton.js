import "./TagButtonStyle.css";
import { useState } from "react";
export default function TagButton({ title = "click me!", children }) {
  const [currentTitle, setCurrentTitle] = useState(title);
  function buttonClicked() {
    setCurrentTitle("clicked!");
  }

  return (
    <div>
      {title == "click me!" || title == "" || title == null ? (
        <div></div>
      ) : (
        <button onClick={buttonClicked} className="tagButton">
          <p>{currentTitle}</p>
          <div>{children}</div>
        </button>
      )}
    </div>
  );
}
