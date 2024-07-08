import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import MainLayout from "./components/MainLayout";
import ListUsers from "./pages/ListUser";
import Login from "./pages/Login";
import ListSlide from "./pages/ListSlide";
import AddSlide from "./pages/AddSlide";
import { PrivateRoutes } from "./routing/PrivateRoutes";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Login />}
        />
        {/* bên trong mainlayout có outlet nhận các phần tử con làm children */}
        <Route
          path="/admin"
          element={
            <PrivateRoutes>
              <MainLayout />
            </PrivateRoutes>
          }>
          <Route
            index
            element={<HomePage />}
          />
          <Route
            path="list-users"
            element={<ListUsers />}
          />
          <Route
            path="add-user"
            element={<AddUser />}
          />

          <Route
            path="add-slide"
            element={<AddSlide />}
          />
          <Route
            path="update-slide/:id"
            element={<AddSlide />}
          />
          <Route
            path="list-slide"
            element={<ListSlide />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
