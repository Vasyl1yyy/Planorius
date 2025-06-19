import { Route, Routes } from 'react-router';
import Header from './pages/Header';
import SignIn from './pages/Sign/Sign-in';
import SignUp from './pages/Sign/Sign-up';
import { useStoreUser } from './store/stateZustand';
import { refreshToken, token } from './api/apiToken';
import { useEffect } from 'react';
import Index from './pages/Index';
import Tasks from './pages/Tasks';
import Habits from './pages/Habits';
import Scripts from './pages/Scripts';
import Friends from './pages/Friends';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

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
      <div>
        {user === null ? (
          <Routes>
            <Route path="/sign-in" element={<SignIn />} />
            <Route index element={<SignUp />} />
          </Routes>
        ) : (
          <div>
            <Header />
            <Routes>
              <Route index element={<Index />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/habits" element={<Habits />} />
              <Route path="/scripts" element={<Scripts />} />
              <Route path="/friends" element={<Friends />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
