import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Post from "./Post";
import SideMenu from "./SideMenu";
import MyInput from "./MyInput";

const showSideMenu = true;

const tasks = [
  { id: 1, task: "code" },
  { id: 2, task: "study" },
  { id: 3, task: "gym" },
  { id: 4, task: "read" },
];

const myTaskList = tasks.map((task) => {
  return <li key={task.id}>{task.task}</li>;
});

const posts = [
  { id: 1, title: "this is the first post", body: "testing the list" },
  { id: 2, title: "second post", body: "it worked" },
  { id: 3, title: "this is fun!", body: "i love sarah 🧡" },
];

const postsList = posts.map((post) => {
  return <Post key={post.id} title={post.title} body={post.body}></Post>;
});
function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* Posts and Side Menu */}
        <div
          style={{
            display: "flex",
            width: "60%",
          }}
        >
          {/* Posts */}
          <div style={{ width: "70%" }}>
            {/* <Post title="this is the first post" body="testing the props">
              <TagButton title="like" />
            </Post>
            <Post title="second post" body="it worked!">
              <h1>This is children</h1>
            </Post>
            <Post />
            <Post />
            <Post />
            <Post /> */}
            <ul>{postsList}</ul>

            <ul
              style={{
                border: "5px solid teal",
                margin: "10px",
              }}
            >
              {myTaskList}
            </ul>
          </div>
          {/*== Posts ==*/}
          {/* Side Menu */}
          <div style={{ width: "30%" }}>
            <ShowSideMenu />
          </div>
          {/*== Side Menu ==*/}
        </div>
        {/*== Posts and Side Menu ==*/}

        <MyInput />
      </div>
    </div>
  );
}

function ShowSideMenu() {
  if (showSideMenu) {
    return <SideMenu />;
  }
}

export default App;
