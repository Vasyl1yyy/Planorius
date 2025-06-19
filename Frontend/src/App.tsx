import { Route, Routes } from 'react-router';
import Header from './components/Header/Header';
import SignIn from './pages/Sign/Sign-in';
import SignUp from './pages/Sign/Sign-up';
import { useStoreUser } from './store/stateZustand';
import { refreshToken, token } from './api/apiToken';
import { useEffect, useState } from 'react';
import Index from './pages/Index';
import Tasks from './pages/Tasks';
import Habits from './pages/Habits';
import Scripts from './pages/Scripts';
import Friends from './pages/Friends';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Planorius from './img/logo-loading.gif';

const App = () => {
  const user = useStoreUser((state) => state.user);
  const [loading, setLoading] = useState(true);
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

      setLoading(false);
    };
    fetchUserData();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="loader">
            <img
              src={Planorius}
              alt="Planorius"
              className="w-56  opacity-75 "
            />
          </div>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default App;
