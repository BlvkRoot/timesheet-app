import { Route, Routes } from "react-router-dom";
import AddTasksComponent from "./components/AddTasksComponent";
import HomeComponent from "./components/HomeComponent";
import LoginComponent from "./components/LoginComponent";

function App() {
  return (
    <div className="app__container">
      <div className="main">
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/add" element={<AddTasksComponent />} />
          <Route path="/login" element={<LoginComponent />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
