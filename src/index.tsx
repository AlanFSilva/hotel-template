import { memo, createRef } from "react";
import type { FC } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  NavLink,
  useLocation,
  useOutlet,
} from "react-router-dom";
import { Container } from "react-bootstrap";
import classes from "./App.module.css";
import resets from "./components/_resets.module.css";
import { Home } from "./components/Home/Home";
import { Acomodacoes } from "./components/Acomodacoes/Acomodacoes";

interface Props {
  className?: string;
}

interface Props {
  className?: string;
}

const routes = [
  { path: "/", name: "Home", element: <Home />, nodeRef: createRef() },
  {
    path: "/acomodacoes",
    name: "Acomodacoes",
    element: <Acomodacoes />,
    nodeRef: createRef(),
  },
];

const Example: FC<Props> = memo(function App(props = {}) {
  const location = useLocation();
  const currentOutlet = useOutlet();
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
          <div className={`${resets.storybrainResets} ${classes.root}`}>
            {currentOutlet}
          </div>
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
      element: route.element,
    })),
  },
]);

const root = createRoot(document.getElementById("root")!);
root.render(<RouterProvider router={router} />);
