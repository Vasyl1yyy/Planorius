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
    <div className="flex  items-center justify-center bg-black-300 text-basic p-1 rounded-2xl border-2 border-black-400 gap-2 hover:border-basic transition delay-100 ease-in-out pl-3 pr-3 cursor-pointer">
      <div className="rounded-full bg-black-200 w-8 h-8 flex items-center justify-center border-2 border-basic">
        <p className="mb-[-3px]">{level}</p>
      </div>
      <div className="rounded-full bg-black-400 w-8 h-8 flex items-center justify-center overflow-hidden ">
        <p className="mb-[-3px]">{avatar}</p>
      </div>
      <p>{username}</p>
    </div>
  );
}
