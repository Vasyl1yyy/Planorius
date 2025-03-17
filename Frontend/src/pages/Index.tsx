import { useStoreUser } from '../store/stateZustand';
import HeaderLeft from './Header/HeaderLeft';
import HeaderRight from './Header/HeaderRight';

export default function Index() {
  const user = useStoreUser((state) => state.user);
  return (
    <div className="flex flex-col items-center justify-center h-screen relative w-full">
      <header className="fixed left-4 h-full pt-8 pb-8 top-0">
        <HeaderLeft />
      </header>
      <div className="fixed right-4 h-full pt-8 top-0">
        <HeaderRight username={user.username} avatar="V" level={user.level} />
      </div>
      <div></div>
    </div>
  );
}
