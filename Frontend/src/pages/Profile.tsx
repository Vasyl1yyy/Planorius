import { useStoreUser } from '../store/stateZustand';

export default function Profile() {
  const user = useStoreUser((state) => state.user);

  return (
    <div className="flex flex-col items-center justify-center h-screen container mx-auto pt-14">
      <div></div>
    </div>
  );
}
