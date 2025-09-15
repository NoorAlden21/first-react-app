export default function Post({
  title = "This is the post title",
  body = "This is the post body",
  children,
}) {
  return (
    <div
      style={{
        border: "5px teal solid",
        margin: "25px",
      }}
    >
      <h2>{title}</h2>
      <hr />
      <p>{body}</p>
      <hr />
      <div>{children}</div>
    </div>
  );
}
