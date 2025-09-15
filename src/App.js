import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Post from "./Post";
import SideMenu from "./SideMenu";
import TagButton from "./TagButton";
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
            <Post title="this is the first post" body="testing the props">
              <TagButton title="like" />
            </Post>
            <Post title="second post" body="it worked!">
              <h1>This is children</h1>
            </Post>
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
          {/*== Posts ==*/}
          {/* Side Menu */}
          <div style={{ width: "30%" }}>
            <SideMenu />
          </div>
          {/*== Side Menu ==*/}
        </div>
        {/*== Posts and Side Menu ==*/}
      </div>
    </div>
  );
}

export default App;
