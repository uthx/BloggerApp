import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import BlogContainer from "./BodyComponents/BlogsContainer";
const BlogContainerHolder = () => {
  return (
    <div>
      <Router>
        <Route path="/">
          <BlogContainerHolder />
        </Route>
      </Router>
    </div>
  );
};

export default BlogContainerHolder;
