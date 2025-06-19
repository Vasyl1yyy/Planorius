import { getLevel, getPercent } from '../../../utils/getLevel';
import LevelCircle from './headerComponentsEment/LevelCircle';

export default function HeaderRight({
  username,
  avatar,
  level,
}: {
  username: string;
  avatar: string;
  level: number;
}) {
  return (
    <div className="flex  items-center justify-center bg-black-300 text-basic font-medium p-1.5 rounded-2xl border-2 border-black-400 gap-2 hover:border-basic transition delay-100 ease-in-out pl-3 pr-3 cursor-pointer">
      <LevelCircle percent={getPercent(level)} level={getLevel(level)} />
      <div className="rounded-full bg-black-400 w-9 h-9 flex items-center justify-center overflow-hidden ">
        {avatar ? (
          <img src={avatar} />
        ) : (
          <p className="mb-[-3px]">{username[0]}</p>
        )}
      </div>
      <p className=" mb-[-2px]">{username}</p>
    </div>
  );
}
