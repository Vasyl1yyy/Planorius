import BlockTasks from '@/components/Tasks/BlockTasks';
import QuicklyAddTasks from '@/components/Tasks/QuicklyAddTasks';

export default function Tasks() {
  return (
    <div className="flex flex-col items-center gap-10 h-screen">
      <QuicklyAddTasks />
      <BlockTasks />
    </div>
  );
}
