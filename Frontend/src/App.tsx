import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import SignIn from './pages/Sign/Sign-in';
import SignUp from './pages/Sign/Sign-up';

const App = () => {
  return (
    <div>
      <h1>
        <Routes>
          <Route index element={<Home />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
        </Routes>
      </h1>
    </div>
  );
};

export default App;
