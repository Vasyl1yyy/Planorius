import { useStoreTasks } from '@/store/stateZustand';
import BlockTasksComponentsTask from './BlockTasks/BlockTasksComponents/BlockTasksComponentsTask';
import BlockTasksFliterDate from './BlockTasks/BlockTasksFliterComponents/BlockTasksFliterDate';
import BlockTasksFliterDifficulty from './BlockTasks/BlockTasksFliterComponents/BlockTasksFliterDifficulty';
import BlockTasksFliterProirity from './BlockTasks/BlockTasksFliterComponents/BlockTasksFliterProirity';
import BlockTasksFliterTag from './BlockTasks/BlockTasksFliterComponents/BlockTasksFliterTag';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function BlockTasks() {
  const { tasks } = useStoreTasks((state) => state);
  return (
    <div className="bg-black-200 border-2 border-black-400 p-6 max-h-3/4 hover:border-basic transition rounded-xl flex flex-col">
      <div className="flex gap-8">
        <BlockTasksFliterDifficulty />
        <BlockTasksFliterProirity />
        <BlockTasksFliterTag />
        <BlockTasksFliterDate />
      </div>
      <ScrollArea className="mt-6 bg-black-100 border-2 border-black-400 px-2 rounded-xl flex   hover:border-basic transition  overflow-y-auto">
        <div className="h-2"></div>
        {tasks && tasks.length > 0 ? (
          tasks.map((task) => (
            <BlockTasksComponentsTask
              key={task.id}
              id={task.id}
              done={task.done}
              difficulty={task.difficulty}
              priority={task.proirity}
              tag={task.tag}
              date={task.date}
              text={task.title}
            />
          ))
        ) : (
          <div className="text-center text-basic">No tasks available</div>
        )}
      </ScrollArea>
    </div>
  );
}
