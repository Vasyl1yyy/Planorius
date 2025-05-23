import { Route, Routes } from 'react-router';
import Index from './pages/Index';
import SignIn from './pages/Sign/Sign-in';
import SignUp from './pages/Sign/Sign-up';
import { useStoreUser } from './store/stateZustand';
import { refreshToken, token } from './api/apiToken';
import { useEffect } from 'react';

const App = () => {
  const user = useStoreUser((state) => state.user);
  const setUser = useStoreUser((state) => state.setUser);
  const fetchUser = async () => {
    const userData = await token();
    if (userData) {
      return userData;
    }
    const refreshData = await refreshToken();
    if (refreshData) {
      return refreshData;
    }
    return null;
  };

  useEffect(() => {
    const fetchUserData = async () => {
      setUser(await fetchUser());
    };
    fetchUserData();
  }, []);

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
