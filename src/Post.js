export default function Post({ children }) {
  return (
    <div
      style={{
        border: "5px teal solid",
        margin: "25px",
      }}
    >
      <h2>This is the post title</h2>
      <hr />
      <p>This is the post body</p>
      <hr />
      <div>{children}</div>
    </div>
  );
}
