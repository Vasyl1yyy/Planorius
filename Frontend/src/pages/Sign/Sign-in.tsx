import { Link, useNavigate } from 'react-router';
import InputSign from '../../components/input/inputSign';
import icon from '../../img/Planorius.png';
import { useState } from 'react';
import { loginUser } from '../../api/api';
import { useStoreUser } from '../../store/stateZustand';

export default function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const setUser = useStoreUser((state) => state.setUser);
  const navigate = useNavigate();

  const handleSignIn = () => {
    loginUser(username, password)
      .then((user) => {
        setUser(user);
      })
      .catch((error) => {
        console.error(error);
      });
    navigate('/');
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <img className="max-h-full opacity-5 absolute z-0" src={icon} alt="" />
      <div className="bg-black-300 rounded-3xl border-2 border-black-400 hover:border-basic transition ease-in-out delay-100 p-8 z-10 min-w-xs w-1/2 max-w-sm gap-5 flex flex-col">
        <h1 className="text-center text-4xl text-white font-semibold">
          Welcome to <br />
          <span className="text-basic">Planorius</span>
        </h1>
        <div>
          <p className="text-basic text-sm ml-5 mb-[-3px]">USERNAME / EMAIL</p>
          <InputSign
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <p className="text-basic text-sm ml-5 mb-[-3px]">PASSWORD</p>
          <InputSign
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex justify-center gap-5">
          <button
            className="bg-basic rounded-full p-2 transition ease-in-out delay-100 text-black-100 w-full hover:bg-black-200 hover:text-basic border-2 border-basic"
            onClick={() => handleSignIn()}
          >
            Sign In
          </button>
          <Link
            to="/"
            className="bg-black-200 rounded-full p-2 transition ease-in-out delay-100 text-basic border-2 border-black-400 w-full hover:border-basic text-center"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
