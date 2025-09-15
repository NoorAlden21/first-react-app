import TagButton from "./TagButton";

export default function SideMenu() {
  return (
    <div style={{ margin: "45px", border: "5px teal solid" }}>
      <TagButton title="click here" />
      <TagButton title="open here">
        <img style={{ width: "100px" }} src="/images (2).jpg"></img>
      </TagButton>
      <TagButton title="click on me">
        <div>
          <span>😂😂😂</span>
        </div>
        <img style={{ width: "100px" }} src="/favicon.ico"></img>
      </TagButton>
      <TagButton />
    </div>
  );
}
