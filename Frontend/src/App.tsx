import { Route, Routes } from 'react-router';
import Header from './components/Header/Header';
import SignIn from './pages/Sign/Sign-in';
import SignUp from './pages/Sign/Sign-up';
import {
  useStoreTags,
  useStoreTasks,
  useStoreUser,
} from './store/stateZustand';
import { token } from './api/apiToken';
import { useEffect, useState } from 'react';
import Index from './pages/Index';
import Tasks from './pages/Tasks';
import Habits from './pages/Habits';
import Scripts from './pages/Scripts';
import Friends from './pages/Messages';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Planorius from './img/logo-loading.gif';
import { tags } from './api/apiTags';
import Statistics from './pages/Statistiscs';
import { tasks } from './api/apiTasks';

const App = () => {
  const user = useStoreUser((state) => state.user);
  const [loading, setLoading] = useState(true);
  const setUser = useStoreUser((state) => state.setUser);
  const setTags = useStoreTags((state) => state.setTags);
  const setTasks = useStoreTasks((state) => state.setTasks);
  const fetchUser = async () => {
    const userData = await token();
    if (userData) {
      const userTags = await tags();
      if (userTags && userTags.length > 0) {
        setTags(userTags);
      }
      const userTasks = await tasks();
      if (userTasks && userTasks.length > 0) {
        setTasks(userTasks);
      }
      return userData;
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
                <Route path="/messages" element={<Friends />} />
                <Route path="/statistics" element={<Statistics />} />
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
