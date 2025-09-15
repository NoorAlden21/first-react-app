import "./TagButtonStyle.css";
export default function TagButton({ title = "click me!" }) {
  return <button className="tagButton">{title}</button>;
}
