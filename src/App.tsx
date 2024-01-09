import { TemplatesPage, DashboardPage, BuilderPage } from "pages";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import "./fonts/font-face.css";
import "antd/dist/antd.less";
import { Navbar } from "components";
import SignUpPage from "pages/SignUpPage";

function App() {
  return (
    <>
      <Routes>
        <Route
          path={"/"}
          element={
            <>
              <SignUpPage />
            </>
          }
        />
        <Route
          path={"/dashboard"}
          element={
            <>
              <Navbar />
              <DashboardPage />
            </>
          }
        />
        <Route
          path={"/templates"}
          element={
            <>
              <Navbar />
              <TemplatesPage />
            </>
          }
        />
        <Route
          path={"/builder"}
          element={
            <>
              <BuilderPage />
            </>
          }
        />
        <Route path={""} element={<Navigate to={"/"} />} />
        <Route path={"*"} element={<Navigate to={"/"} />} />
      </Routes>
    </>
  );
}

export default App;
