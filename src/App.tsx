import { FC, useRef } from "react";
import {
  Outlet,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";

const Container: FC = () => {
  const pageView = useRef(null);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
      ref={pageView}
    >
      <Header
        onClickItem={() => {
          window.scrollTo(0, 1020);
        }}
      />
      <Outlet />
      <Footer
        onClickAbout={() => {
          window.scrollTo(0, 1020);
        }}
      />
    </div>
  );
};

const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Container />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Home />} />
        </Route>
        <Route path="*" element={<Container />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
