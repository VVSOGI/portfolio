import "./App.css";
import { Route, Routes } from "react-router-dom";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import { connect } from "react-redux";
import MainPage from "./pages/MainPage/MainPage";

const App = (props: any) => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/project" element={<ProjectPage />} />
    </Routes>
  );
};

const mapStateToProps = (state: any) => {
  return {
    page: state.pageReducer,
  };
};

export default connect(mapStateToProps, null)(App);
