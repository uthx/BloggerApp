import "./App.css";
import { BlogContextProvider } from "./blogContext/blogContext";
import Demo from "./components/demo";
import NavBar from "./components/NavComponents/NavBar";
import BlogsContainer from "./components/BodyComponents/BlogsContainer";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import LikedPost from "./components/NavComponents/Like";
import DislikedPost from "./components/NavComponents/Dislike";
import CreateNewPost from "./components/NavComponents/CreatePost";
function App() {
  return (
    <div className="App">
      <BlogContextProvider>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/" exact component={BlogsContainer}></Route>
            <Route path="/liked-posts" component={LikedPost}></Route>
            <Route path="/disliked-posts" component={DislikedPost}></Route>
            <Route path="/create-new-post" component={CreateNewPost}></Route>
          </Switch>
        </Router>
      </BlogContextProvider>
    </div>
  );
}

export default App;
