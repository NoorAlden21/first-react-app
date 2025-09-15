import "./TagButtonStyle.css";
export default function TagButton({ title = "click me!", children }) {
  return (
    <div>
      <button className="tagButton">
        <p>{title}</p>
        <div>{children}</div>
      </button>
    </div>
  );
}
