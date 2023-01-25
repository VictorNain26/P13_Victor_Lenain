import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import ProtectedRoute from './components/protectedRoute';

function Router() {
  return (
    <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route exact path="/login" element={ <SignIn /> } />
        <Route element={<ProtectedRoute />}>
          <Route exact path="/profile" element={ <Profile /> } />
        </Route>
    </Routes>
  );
}

export default Router;
