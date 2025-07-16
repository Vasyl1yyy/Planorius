import { Button } from '../ui/button';
import { Input } from '../ui/input';
import QuicklyAddTasksSelectDate from './QuicklyAddTasksComponets/QuicklyAddTasksSelectDate';
import QuicklyAddTasksSelectDifficulty from './QuicklyAddTasksComponets/QuicklyAddTasksSelectDifficulty';
import QuicklyAddTasksSelectProirity from './QuicklyAddTasksComponets/QuicklyAddTasksSelectProirity';
import QuicklyAddTasksSelectTag from './QuicklyAddTasksComponets/QuicklyAddTasksSelectTag';

export default function QuicklyAddTasks() {
  return (
    <div className=" p-12">
      <div className="flex">
        <QuicklyAddTasksSelectDifficulty />
        <QuicklyAddTasksSelectProirity />
        <QuicklyAddTasksSelectTag />
        <QuicklyAddTasksSelectDate />
      </div>
      <div className="flex">
        <Input
          type="text"
          className="bg-black-200 border-1 border-black-400 border-l-2 border-b-2 rounded-none rounded-bl-xl text-basic hover:border-basic transition"
        />
        <Button className="bg-basic text-black pt-3 rounded-none rounded-br-xl border-1 border-r-2 border-b-2 border-black-400 hover:border-basic transition hover:bg-basic cursor-pointer">
          Add Task
        </Button>
      </div>
    </div>
  );
}
