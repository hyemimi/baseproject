import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";
import Layout from "./Layout/Layout";
import Login from "./Pages/Login";
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route key="main" path="/" element={<Main />} />
      </Route>
      <Route key="login" path="/login" element={<Login />} />{" "}
      {/*로그인 페이지는 레이아웃 적용 x*/}
    </Routes>
  );
}

export default App;
