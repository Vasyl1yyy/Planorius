import { useStoreUser } from '../store/stateZustand';
import HeaderLeft from '../components/Header/HeaderLeft';
import HeaderRight from '../components/Header/HeaderRight';

export default function Header() {
  const user = useStoreUser((state) => state.user);

  return (
    <>
      <header className="fixed left-4 h-full pt-8 pb-8 top-0">
        <HeaderLeft />
      </header>
      <div className="fixed right-4 h-full pt-8 top-0">
        {user && (
          <HeaderRight username={user.username} avatar="V" level={user.level} />
        )}
      </div>
    </>
  );
}
