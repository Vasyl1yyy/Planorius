import { Link } from 'react-router';
import InputSign from '../../components/input/inputSign';
import icon from '../../img/Planorius.png';
import { useState } from 'react';
import { registerUser } from '../../api/apiUser';
import { useStoreUser } from '../../store/stateZustand';

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPass, setRepeatPass] = useState('');
  const setUser = useStoreUser((state) => state.setUser);
  const [error, setError] = useState('');

  const addUser = () => {
    if (password !== repeatPass) {
      setError('Passwords do not match');
      return;
    }
    if (username.length < 4) {
      setError('Username must be at least 4 characters long');
      return;
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }
    if (!email.includes('@')) {
      setError('Email must be valid');
      return;
    }
    registerUser(email, username, password)
      .then((user) => {
        setUser(user);
      })
      .catch((error) => {
        console.error(error);
        setError('Failed to create user');
      });
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
          <p className="text-basic text-sm ml-5 mb-[-3px]">USERNAME</p>
          <InputSign
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <p className="text-basic text-sm ml-5 mb-[-3px]">EMAIL</p>
          <InputSign
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <div>
          <p className="text-basic text-sm ml-5 mb-[-3px]">REPEAT PASSWORD</p>
          <InputSign
            type="password"
            value={repeatPass}
            onChange={(e) => setRepeatPass(e.target.value)}
          />
        </div>

        {error && (
          <p className="text-red-500 text-sm text-center mt-2">{error}</p>
        )}
        <div className="flex justify-center gap-5">
          <button
            className="bg-basic rounded-full p-2 transition ease-in-out delay-100 text-black-100 w-full hover:bg-black-200 hover:text-basic border-2 border-basic"
            onClick={() => addUser()}
          >
            Create
          </button>
          <Link
            to="/sign-in"
            className="bg-black-200 rounded-full p-2 transition ease-in-out delay-100 text-basic border-2 border-black-400 w-full hover:border-basic text-center"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
