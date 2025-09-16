import "./TagButtonStyle.css";
export default function TagButton({ title = "click me!", children }) {
  return (
    <div>
      {title == "click me!" || title == "" || title == null ? (
        <div></div>
      ) : (
        <button className="tagButton">
          <p>{title}</p>
          <div>{children}</div>
        </button>
      )}
    </div>
  );
}
