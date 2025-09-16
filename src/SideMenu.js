import { Children } from "react";
import TagButton from "./TagButton";

export default function SideMenu() {
  const categories = [
    { id: 1, title: "click here" },
    {
      id: 2,
      title: "click here",
      Children: (
        <div>
          <img style={{ width: "100px" }} src="/images (2).jpg" alt=""></img>
        </div>
      ),
    },
    {
      id: 3,
      title: "open here",
      Children: (
        <div>
          <span>😂😂😂</span>
          <img style={{ width: "100px" }} src="/favicon.ico" alt=""></img>
        </div>
      ),
    },
  ];

  const categoriesList = categories.map((category) => {
    return (
      <TagButton key={category.id} title={category.title}>
        {category.Children}
      </TagButton>
    );
  });
  return (
    <div style={{ margin: "45px", border: "5px teal solid" }}>
      {/* <TagButton title="click here" />
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
      <TagButton /> */}
      {categoriesList}
    </div>
  );
}
