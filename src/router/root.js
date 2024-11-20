import { Suspense, lazy } from "react";

const { createBrowserRouter } = require("react-router-dom");

const Loading = <div>Loading</div>;
const Main = lazy(() => import("../pages/MainPage"));

const TodoIndex = lazy(() => import("../pages/todo/IndexPage"));

const TodoList = lazy(() => import("../pages/todo/ListPage"));
const About = lazy(() => import("../pages/AboutPage"));

const root = createBrowserRouter([
  {
    path: "",
    element: (
      <Suspense fallback={Loading}>
        <Main />
      </Suspense>
    ),
  },
  {
    path: "about",
    element: (
      <Suspense fallback={Loading}>
        <About />
      </Suspense>
    ),
  },

  {
    path: "todo",
    element: (
      <Suspense fallback={Loading}>
        <TodoIndex />
      </Suspense>
    ),
    children: [
      {
        path: "list",
        element: (
          <Suspense fallback={Loading}>
            <TodoList />
          </Suspense>
        ),
      },
    ],
  },
]);

export default root;
