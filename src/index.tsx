import { memo } from "react";
import type { FC } from "react";

import classes from "./App.module.css";
import resets from "./components/_resets.module.css";
import { Home } from "./components/Home/Home";

interface Props {
  className?: string;
}

import { createRef } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  NavLink,
  useLocation,
  useOutlet
} from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { Container, Navbar, Nav } from "react-bootstrap";

const routes = [
  { path: "/", name: "Home", element: <Home />, nodeRef: createRef() }
];

const Example: FC<Props> = memo(function App(props = {}) {
  const location = useLocation();
  const currentOutlet = useOutlet();
  const { nodeRef } =
    routes.find((route) => route.path === location.pathname) ?? {};
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <>
        {/*<Navbar bg="light">
          <Nav className="mx-auto">
            {routes.map((route) => (
              <Nav.Link
                key={route.path}
                as={NavLink}
                to={route.path}
                className={({ isActive }) => (isActive ? "active" : undefined)}
                end
              >
                {route.name}
              </Nav.Link>
            ))}
          </Nav>
            </Navbar> */}

        <Container className="container">
          <SwitchTransition>
            <CSSTransition
              key={location.pathname}
              nodeRef={nodeRef}
              timeout={300}
              classNames="page"
              unmountOnExit
            >
              {(state) => (
                <div
                  ref={nodeRef}
                  className={`${resets.storybrainResets} ${classes.root}`}
                >
                  {currentOutlet}
                </div>
              )}
            </CSSTransition>
          </SwitchTransition>
        </Container>
      </>
    </div>
  );
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Example />,
    children: routes.map((route) => ({
      index: route.path === "/",
      path: route.path === "/" ? undefined : route.path,
      element: route.element
    }))
  }
]);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<RouterProvider router={router} />);
