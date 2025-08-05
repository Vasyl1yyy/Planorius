import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import QuicklyAddTasksSelectDate from './QuicklyAddTasksComponets/QuicklyAddTasksSelectDate';
import QuicklyAddTasksSelectDifficulty from './QuicklyAddTasksComponets/QuicklyAddTasksSelectDifficulty';
import QuicklyAddTasksSelectProirity from './QuicklyAddTasksComponets/QuicklyAddTasksSelectProirity';
import QuicklyAddTasksSelectTag from './QuicklyAddTasksComponets/QuicklyAddTasksSelectTag';
import { addTasks } from '@/api/apiTasks';
import { useStoreTasks } from '@/store/stateZustand';
export default function QuicklyAddTasks() {
  const [valueDifficulty, setValueDifficulty] = useState(0);
  const [valuePriority, setValuePriority] = useState(0);
  const [valueTag, setValueTag] = useState(0);
  const [valueDate, setValueDate] = useState('');
  const [title, setTitle] = useState('');

  const setTasks = useStoreTasks((state) => state.setTasks);

  const addNewTasks = async () => {
    const newTask = await addTasks(
      title,
      valueDifficulty,
      valuePriority,
      valueTag,
      valueDate
    );
    setTasks(newTask);
    setTitle('');
  };
  return (
    <div className=" p-12">
      <div className="flex">
        <QuicklyAddTasksSelectDifficulty
          setValue={(e) => setValueDifficulty(Number(e))}
        />
        <QuicklyAddTasksSelectProirity
          setValue={(e) => setValuePriority(Number(e))}
        />
        <QuicklyAddTasksSelectTag setValues={(e) => setValueTag(Number(e))} />
        <QuicklyAddTasksSelectDate setValue={(e) => setValueDate(e)} />
      </div>
      <div className="flex">
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Task title..."
          className="bg-black-200 border-1 border-black-400 border-l-2 border-b-2 rounded-none rounded-bl-xl text-basic hover:border-basic transition placeholder:text-black-400 focus:outline-none focus:border-basic"
        />
        <Button
          onClick={() => addNewTasks()}
          className="bg-basic text-black pt-3 rounded-none rounded-br-xl border-1 border-r-2 border-b-2 border-black-400 hover:border-basic transition hover:bg-basic cursor-pointer"
        >
          Add Task
        </Button>
      </div>
    </div>
  );
}
