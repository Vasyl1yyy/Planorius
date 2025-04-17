import { Route, Routes } from 'react-router';
import Index from './pages/Index';
import SignIn from './pages/Sign/Sign-in';
import SignUp from './pages/Sign/Sign-up';
import { useStoreUser } from './store/stateZustand';

const App = () => {
  const userDB = useStoreUser((state) => state.user);
  const setUser = useStoreUser((state) => state.setUser);

  let user = null;

  const localStorageUser = localStorage.getItem('token');

  if (userDB !== null) {
    user = userDB;
  } else if (localStorageUser !== null) {
    setUser(JSON.parse(localStorageUser));
    user = userDB;
  }
  return (
    <div>
      <h1>
        {user === null ? (
          <Routes>
            <Route path="/sign-in" element={<SignIn />} />
            <Route index element={<SignUp />} />
          </Routes>
        ) : (
          <Routes>
            <Route index element={<Index />} />
          </Routes>
        )}
      </h1>
    </div>
  );
};

export default App;
