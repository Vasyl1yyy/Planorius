import BlockTasksComponentsTask from './BlockTasks/BlockTasksComponents/BlockTasksComponentsTask';
import BlockTasksFliterDate from './BlockTasks/BlockTasksFliterComponents/BlockTasksFliterDate';
import BlockTasksFliterDifficulty from './BlockTasks/BlockTasksFliterComponents/BlockTasksFliterDifficulty';
import BlockTasksFliterProirity from './BlockTasks/BlockTasksFliterComponents/BlockTasksFliterProirity';
import BlockTasksFliterTag from './BlockTasks/BlockTasksFliterComponents/BlockTasksFliterTag';

export default function BlockTasks() {
  return (
    <div className="bg-black-200 border-2 border-black-400 p-6 hover:border-basic transition rounded-xl">
      <div className="flex gap-8">
        <BlockTasksFliterDifficulty />
        <BlockTasksFliterProirity />
        <BlockTasksFliterTag />
        <BlockTasksFliterDate />
      </div>
      <div className="mt-6 bg-black-100 border-2 border-black-400 p-2 rounded-xl flex flex-col gap-2">
        <BlockTasksComponentsTask
          difficulty="easy"
          priority="normal"
          tag="dev"
          date="2025-07-16"
          text="Complete the frontend task"
        />
        <BlockTasksComponentsTask
          difficulty="hard"
          priority="urgent"
          tag="artem"
          date="2025-07-17"
          text="Fix the critical bug in the application"
        />
        {/* Add more tasks as needed */}
      </div>
    </div>
  );
}
