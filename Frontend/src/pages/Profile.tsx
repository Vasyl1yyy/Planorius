import { useStoreUser } from '../store/stateZustand';
import { getLevel, getNextLevelXp } from '../utils/getLevel';

export default function Profile() {
  const user = useStoreUser((state) => state.user);

  const level = getLevel(user?.level || 0);
  const nextLevelXp = getNextLevelXp(user?.level || 0);

  return (
    <div className="flex flex-col items-center  h-screen container mx-auto pt-14">
      <div className="flex items-center justify-center bg-black-200 w-full h-56 border-2 border-black-400 rounded-2xl hover:border-basic transition-all duration-300">
        {user?.banner ? (
          <img
            src={user.banner}
            alt="User banner"
            className="w-32 h-32 rounded-full mb-4"
          />
        ) : (
          <div className="text-6xl font-bold text-black-400 mt-4">
            {user?.username}
          </div>
        )}
      </div>
      <div className="flex items-center justify-center mt-6 gap-10">
        <div className="flex items-center">
          <div className="rounded-full border-2 border-black-400 bg-black-200 w-48 h-48 flex items-center justify-center mr-4 hover:border-basic transition-all duration-300">
            {user?.avatar ? (
              <img src={user.avatar} alt="User avatar" />
            ) : (
              <div className="text-8xl text-basic mt-4">
                {user?.username[0]}
              </div>
            )}
          </div>
          <div>
            <h1 className="text-2xl font-bold mt-4 text-white">
              {user?.username}
            </h1>
            <div className="flex items-center justify-between text-sm text-basic">
              <p className="text-sm text-basic">
                {'level: ' + getLevel(level)}
              </p>
              <span className="ml-4">
                {user?.level + '/' + getNextLevelXp(nextLevelXp)}
              </span>
            </div>
          </div>
        </div>
        <div className="text-center bg-black-200 border-2 border-black-400 rounded-2xl w-56 h-28 flex flex-col items-center justify-between pt-4  hover:border-basic transition-all duration-300">
          <p className="text-5xl font-bold text-basic">0</p>
          <p className="text-lg text-white">tasks completed</p>
        </div>
        <div className="text-center bg-black-200 border-2 border-black-400 rounded-2xl w-56 h-28 flex flex-col items-center justify-between pt-4  hover:border-basic transition-all duration-300">
          <p className="text-5xl font-bold text-basic">0</p>
          <p className="text-lg text-white">streak</p>
        </div>
        <div className="text-center bg-black-200 border-2 border-black-400 rounded-2xl w-56 h-28 flex flex-col items-center justify-between pt-4  hover:border-basic transition-all duration-300">
          <p className="text-5xl font-bold text-basic">0</p>
          <p className="text-lg text-white">created scripts</p>
        </div>
      </div>
    </div>
  );
}
