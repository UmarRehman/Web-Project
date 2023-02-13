import Main from "./Components/Main";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { routes } from "./Routes/Routes";
import ProtectedRoute from "./Pages/ProtectedRoutes/ProtectedRoute";
import Login from "./Pages/LoginPage/Login";
import PrivateRoute from "./Pages/ProtectedRoutes/PrivateRoute";
function App() {
  return (
    <>
      {/* <Main /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Main />}>
            {routes ? (
              routes.map((route, k) => {
                return (
                  <Route
                    key={k}
                    path={route.path}
                    exact={route.exact}
                    element={<route.component />}
                  />
                );
              })
            ) : (
              <>
                <h1>Page not found</h1>
              </>
            )}
            {/* <Route path="*" element={<Navigate to ='/project' />} /> */}
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
